class Auth {
    authenticated = false;

    login(user) {
        localStorage.setItem(`__sadh_user`, JSON.stringify(user));
        if (user.token) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }

    user() {
        return (
            JSON.parse(localStorage.getItem(`__sadh_user`))
        );
    }

    token() {
        const user = JSON.parse(
            localStorage.getItem(`__sadh_user`)
        );
        return user?.token;
    }

    logout() {
        localStorage.removeItem(`__sadh_user`);
        this.authenticated = false;
    }

    isUserAuthenticated() {
        if (localStorage.getItem(`__sadh_user`)) {
            return true;
        } else {
            return false;
        }
    }
}

export default new Auth();
