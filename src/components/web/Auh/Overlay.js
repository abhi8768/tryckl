import React, { Component } from 'react';

/* interface Props {
    handleClickSignUpButton(event: any): void;
    handleClickSignInButton(event: any): void;
} */

function Overlay(props) {
   
        const { handleClickSignUpButton, handleClickSignInButton } = props;
        return (
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>ALREADY have an account? </h1>
                        
                        <button className="ghost" id="signIn" onClick={handleClickSignInButton}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Don’t have an account?</h1>
                    
                        <button className="ghost" id="signUp" onClick={handleClickSignUpButton}>Create new account</button>
                    </div>
                </div>
            </div>
            
        );
}


export default Overlay;