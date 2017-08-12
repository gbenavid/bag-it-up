import React, { Component } from 'react';
import { auth, googleAuthProvider, githubAuthProvider} from './firebase';

class SignIn extends Component {
    render() {
        return (
            <div className="SignIn">
                <button onClick={()=> auth.linkWithPopUp(githubAuthProvider)}>
                    Sign In
                </button>
            </div>
        )
    }
}

export default SignIn;