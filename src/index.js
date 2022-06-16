import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-ewxwtv6b.us.auth0.com"
                clientId="c4lN4HdGGgVpAk0rR6Z2Mli7xzpmBq3X"
                redirectUri={window.location.origin} >
                <App/>
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
