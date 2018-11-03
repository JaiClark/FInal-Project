import React, { Component } from 'react';
// import fire from '../components/fire';
import NavBar from '../components/NavBar';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        // fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
               <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Auth;