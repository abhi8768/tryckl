import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import RouteComponent from './containers/RouteComponent';
import store from './store'; 


const renderApp = Component => {

            ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <Component />
                    </Router>
                </Provider>,
            document.getElementById('root')
        );
    
};
renderApp(RouteComponent);
