import React from 'react';
import { Welcome } from '@app/components/welcome/welcome';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => <Welcome />;
root.render(<App />);
