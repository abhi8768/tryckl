import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import RouteComponent from './containers/RouteComponent';
import store from './store'; 


const renderApp = Component => {

    if (window.location.pathname === '/') {
        document.getElementById("root").style.display = "none";
        document.getElementById("scroll").style.display = "block";
    }else{
        
        var sheet = document.getElementById('landing_bootstrap');
        sheet.disabled = true;
        sheet.parentNode.removeChild(sheet);

        var sheet2 = document.getElementById('landing_custom');
        sheet2.disabled = true;
        sheet2.parentNode.removeChild(sheet2);

        document.getElementById("scroll").style.display = "none";
        document.getElementById("root").style.display = "block";
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    }
    
};
renderApp(RouteComponent);
