import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;