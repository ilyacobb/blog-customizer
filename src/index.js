import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { StrictMode } from 'react';
import { App } from './components/app/app';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
//# sourceMappingURL=index.js.map