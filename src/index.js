import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// allows access to the DOM and connects to main app component with strict mode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

