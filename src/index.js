import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { SnackbarProvider } from 'notistack';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Helper/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ScrollToTop />
    <SnackbarProvider maxSnack={3}>
    <App />
    </SnackbarProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
