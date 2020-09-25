import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import "./login.css"

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container reg-frm">
                <form action="#">
                    <h1>Create Account</h1>
                                      
                    <Scrollbars style={{ height: "40vh" }}
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200} 
                        
                       
                        
                    >
                        <div className="frm-wrapper text-left"style={{ height: "40vh" }}>
                            <label>FIRST NAME</label>
                            <input type="email" placeholder="Enter registered mobile no." />
                        
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                            <label>User ID</label>
                            <input type="password" placeholder="Enter valid password " />
                        </div>
                    </Scrollbars>
                    <div className="frm-wrapper">
                        <button style={{marginTop : '20px'}}>LOGIN</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
