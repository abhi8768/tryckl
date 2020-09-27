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
                        <div className="frm-wrapper text-left" data-height="40vh" data-scrollable="">
                            <label>FIRST NAME</label>
                            <input type="email" placeholder="Enter registered mobile no." />
                    
                            <label>LAST NAME</label>
                            <input type="email" placeholder="Enter registered mobile no." />

                            <label>Password</label>
                            <input type="password" placeholder="Enter valid password " />

                            <label>CONFIRM PASSWORD</label>
                            <input type="password" placeholder="Enter valid password " />

                            <label>MOBILE NO. (USER ID)</label>
                            <input type="email" placeholder="Enter registered mobile no." />

                            <label>email</label>
                            <input type="email" placeholder="Enter registered mobile no." />

                            <label>real estate license #</label>
                            <input type="email" placeholder="Enter registered mobile no." />

                            <label>real estate lic issuing state</label>
                            <input type="email" placeholder="Enter registered mobile no." />
                                
                            <label>FIRST NAME</label>
                            <select name="" className="custom-select">
                            <option value="">fsdfsdf</option>
                                <option value="">fsdfsdf</option>
                                <option value="">fsdfsdf</option>
                            
                            </select>

                            <label>FIRST NAME</label>
                            <select name="" className="custom-select">
                            <option value="">fsdfsdf</option>
                                <option value="">fsdfsdf</option>
                                <option value="">fsdfsdf</option>
                            
                            </select>
                            <label className="container-check float-left"><span>i accept the terms and conditions</span>
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
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
