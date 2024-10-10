import React from 'react';
import { createRoot } from 'react-dom/client';
import '../public/style.css'; // If you have a CSS file
import Login from './Login';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Login />);
