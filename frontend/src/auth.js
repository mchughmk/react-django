module.exports = {
    login: function(username, pass, cb) {
        if (sessionStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass).then((res) => {
            if (res.authenticated) {
                sessionStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        });
    },        
    
    logout: function() {
        if (this.loggedIn()) {
            fetch('/api/logout/', {
                method: 'POST',
                headers: {
                    'Authentication': 'Token ' + sessionStorage.token
                }
            });

            delete sessionStorage.token;
        }
    },

    loggedIn: function() {
        return !!sessionStorage.token;
    },

    retrieveToken: function() {
        if (this.loggedIn()) {
            return sessionStorage.token;
        } else {
            return '';
        }
    },

    getToken: function(username, pass) {
        return fetch('/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: pass
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return {
                    authenticated: responseJson.token ? true : false,
                    token: responseJson.token,
                    user: responseJson.user
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }
}