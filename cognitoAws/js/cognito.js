if(this != this.window) {
}

let cognito = {
    reginon          : "",
    identity_pool_id : "",
    user_pool_id     : "",
    client_id        : "",

    init: function(region, identity_pool_id, user_pool_id, client_id) {
        this.region           = region;
        this.identity_pool_id = identity_pool_id;
        this.user_pool_id     = user_pool_id;
        this.client_id        = client_id;

        let credential = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: identity_pool_id,
        });
        // auth
        AWS.config.region = region; // Region
        AWS.config.credentials = credential;

        // Initialize the Amazon Cognito credentials provider
        AWSCognito.config.region = region; // Region
        AWSCognito.config.credentials = credential;

    },
    cognitoUser: function(name) {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUser({
            Username : name,
            Pool     : new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
                UserPoolId : this.user_pool_id,
                ClientId   : this.client_id,
                Paranoia   : 7
            }),
        });
    },
    authenticateUser: function(cognitoUser, name, password, callback) {
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails({
            Username : name,
            Password : password,
        });
        cognitoUser.authenticateUser(authenticationDetails, callback);
    },
    checkLogin: function(setLogin, callback){
        let user = this.getCurrentUser();
        if(user == null) {
            callback(null, {});
            return;
        }
        this.getSession(user, setLogin, callback);
    },
    getCurrentUser: function(){
        var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
            UserPoolId: this.user_pool_id,
            ClientId  : this.client_id,
        });
        return userPool.getCurrentUser();
    },
    getSession: function(user, setLogin, callback) {
        user.getSession(function(err, session) {
            if(err) {
                callback(err);
                return;
            }

            if (session) {
                user.getUserAttributes(function(err, attributes) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    if(setLogin) cognito.setLogin(session.getIdToken().getJwtToken());
                    callback(null, {session: session, attributes: attributes});
                });
            }
        });
    },
    setLogin: function(pool_arn) {
        let identity_pool_id = this.identity_pool_id;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: identity_pool_id,
            Logins: {
                POOL_ARN: pool_arn
            },
        });
    },
    completeNewPasswordChallenge: function(cognitoUser, password, attribute, callback){
        // http://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-identity-user-pools-javascript-example-authenticating-admin-created-user.html
        cognitoUser.completeNewPasswordChallenge(password, attribute, callback);
    },
};

if(this != this.window) for(let key in cognito) exports[key]=cognito[k];