import React from 'react';
//import { createRoot } from 'react-dom/client';
import Login from './Login';
import Register from './Register';

/*const App = () => {
    return (
        <div>
            <h1>User Login</h1>
            <Login />
            <Register />
        </div>
    );
};
const container = document.getElementById('root');
   const root = createRoot(container);
   root.render(<App />);*/
const { createRoot } = ReactDOM;

function App() {
    return <h2>Welcome to Therapist Login</h2>;
}

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);

export default App;
