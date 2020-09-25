import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="frm-wrapper text-left">
                        <label>User ID</label>
                        <input type="email" placeholder="Enter registered mobile no." />
                        <a href="#" className="forg">Forgot User ID?</a>
                        
                        <label>Password</label>
                        <input type="password" placeholder="Enter valid password " />
                        <label className="container-check float-left"><span>Remember me</span>
                            <input type="checkbox" checked="checked"/>
                            <span className="checkmark"></span>
                        </label>
                        
                        <a href="#" className="float-right forg">Forgot password?</a>
                        <button>LOGIN</button>
                        <div className="help-center">
                            <p>
                                <a href="">Login Help </a>
                                <a href="" className="float-right">Contact Us</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;