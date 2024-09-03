# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

I opened VSCode, created a new terminal, and navigated to my app directory using cd. I then ran npm install react-router-dom to install the necessary package. After that, I created a new branch for navigation with git checkout -b navigation. Next, I updated App.js to import BrowserRouter as Router, Route, and Switch from react-router-dom. I then went to the components folder and created a file named Navbar.jsx, where I imported Link from react-router-dom. I also created a couple of pages in the components folder, such as About.jsx and Contact.jsx, and defined function components in each of these files.
