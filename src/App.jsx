import React from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebAppsPage from './pages/WebAppsPage';
import VideosPage from './pages/VideosPage';
import BlogsPage from './pages/BlogsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/apps"
          element={<WebAppsPage />}
        />
        <Route
          path="/video"
          element={<VideosPage />}
        />
        <Route
          path="/blogs"
          element={<BlogsPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
