import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import styles from '../scss/styles.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
