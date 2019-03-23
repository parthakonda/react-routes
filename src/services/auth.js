/**
 * Authentication service
 */
class Authentication {

    constructor() {
        this.authenticated = localStorage.getItem('authenticated') || false;
        this.username = 'admin';
        this.password = 'admin';
    }

    login(username, password) {
        if (username === this.username && password === this.password) {
            this.authenticated = true;
            localStorage.setItem('authenticated', true);
            return true;
        } else {
            this.authenticated = false;
            localStorage.setItem('authenticated', false);
            return false;
        }
    }

    logout() {
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authentication();