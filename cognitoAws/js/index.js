// auth
AWS.config.region = REGION; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID,
});

// Initialize the Amazon Cognito credentials provider
AWSCognito.config.region = REGION; // Region
AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID
});

$("#login-button").click(function(event){ 
    event.preventDefault();

    let userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
        UserPoolId : USER_POOL_ID,
        ClientId   : CLIENT_ID,
        Paranoia   : 7
    });

    let cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser({
        Username : $('#name').val(),
        Pool     : userPool
    });

    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails({
        Username : $('#name').val(),
        Password : $('#password').val()
    });
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (authresult) {
            //console.log('access token + ' + authresult.getIdToken().getJwtToken());
             
             var url = "mypage.html";
 
             $('form').fadeOut(700, function(){
                $(location).attr("href", url);
             });
             $('.wrapper').addClass('form-success'); 
             
        },
        onFailure: function(err) {
            alert(err.message);
        },
        // まだpasswordが確定していない
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.

            console.log(userAttributes);
            // the api doesn't accept this field back
            delete userAttributes.email_verified;

            // TODO:多分あんまりよくない
            userAttributes.name = "foo";
            userAttributes.email = "a@b.com";

            // Get these details and call
            cognitoUser.completeNewPasswordChallenge("12345678", userAttributes, this);
        }        
    });
});

function checkLogin() {     
    var data = {
        UserPoolId: USER_POOL_ID,
        ClientId  : CLIENT_ID,
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, sessresult) {
            if (sessresult) {
                console.log('You are now logged in.', sessresult);
                cognitoUser.getUserAttributes(function(err, attrresult) {
                    if (err) {
                        alert(err);
                        return;
                    }
                    // TODO:getuser Info & setting other
                    console.log(cognitoUser);
                    console.log(attrresult);
                    $("#username").html("Username: " + cognitoUser.username);
                    for (i = 0; i < attrresult.length; i++) {
                        if (attrresult[i].getName()=="email"){
                          $("#email").html("EMail: " + attrresult[i].getValue());
                        }
                    }

                    // Add the User's Id Token to the Cognito credentials login map.
                    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: IDENTITY_POOL_ID,
                        Logins: {
                            POOL_ARN: sessresult.getIdToken().getJwtToken()
                        }
                    });
                });
            } else {
               var url = "login.html";
               $(location).attr("href", url);
            }
        });
    } else {
      var url = "login.html";
      $(location).attr("href", url);
    }
}
checkLogin();