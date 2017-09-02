cognito.init(REGION, IDENTITY_POOL_ID, USER_POOL_ID, CLIENT_ID);

var userData = {};
cognito.checkLogin(true, function(err, data){
    if(err) {
        console.log(err);
        return;
    }
    if(Object.keys(data).length == 0) {
        console.log("no loging");
    }
    userData = data;
});

$("#login-button").click(function(event){ 
    event.preventDefault();

    let name = $('#name').val();
    let password = $('#password').val();

    let cognitoUser = cognito.cognitoUser(name);
    let callback = {
        onSuccess: function(result) {
             var url = "mypage.html";

             $('form').fadeOut(700, function(){
                $(location).attr("href", url);
             });
             $('.wrapper').addClass('form-success'); 
        },
        onFailure: function(err) {
            alert(err.message);
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            // TODO: goto new password setting page;
            console.log("dd", userAttributes, requiredAttributes);
            // the api doesn't accept this field back
            delete userAttributes.email_verified;

            // 必要なフィールドは、requiredAttributesにセットされる
            userAttributes.name = "foo";
            userAttributes.email = "a@b.com";

            // TODO: new password
            password = password;

            // Get these details and call
            cognito.completeNewPasswordChallenge(cognitoUser, password, userAttributes, callback);
        },
    };
    cognito.authenticateUser(cognitoUser, name, password, callback);
});

$("#callHello").on("click", function(event) {
    event.preventDefault();

    $.ajax({
        type: "POST",
        url: CALL_URL,
        headers: {
            Authorization: userData.session.getIdToken().getJwtToken()
        },
        data: {
            a: 123,
        }

    }).done(function(res){
        $("#log").text(JSON.stringify(res));
        console.log("res", res);
    }).fail(function(event, error, message){
        console.log(event, error, message);
    });
});

