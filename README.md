# React Zustand App

This is a simple React application that demonstrates state management using Zustand and client-side routing with React Router.

## Features

- **React 19** with modern JSX support
- **React Router 7.1.5** for client-side navigation
- **Zustand** for global state management
- **Vite** as the build tool for fast development

## Installation

To get started, download or clone this repository and install the dependencies:

```sh
npm install
```

## Development

To start the development server, run:

```sh
npm run dev
```

This will launch the app on `http://localhost:5173/` (or another available port).

## Build

To create a production-ready build, run:

```sh
npm run build
```

To preview the build locally:

```sh
npm run preview
```

## Project Structure

```
src/
│-- components/
│   ├── Header.jsx
│   ├── Footer.jsx
│-- pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Users.jsx
│-- store.js  # Zustand store
│-- App.jsx
│-- index.jsx
```

## Routes

- `/` - Home Page
- `/about` - About Page
- `/users` - Users Page

## Technologies Used

- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License.

