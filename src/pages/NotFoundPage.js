import React from 'react';
import '../NotFoundPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
        <NavBar />
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <a href="/">Go back to Home</a>
        </div>
        <Footer />
    </>
  );
};

export default NotFoundPage;