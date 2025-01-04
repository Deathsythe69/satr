import React from 'react';
import { Link } from 'react-router-dom'; 

function LandingPage() {
  return (
    <div 
      style={{ 
        backgroundImage: `url('path/to/your/background/image.jpg')`, 
        backgroundSize: 'cover', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '2rem', 
        borderRadius: '8px' 
      }}>
        <h1>My Company Name</h1> 
        <p>
          This is a paragraph about my company. We do amazing things! 
        </p>
        <Link to="/products" className="btn btn-primary">Get Started</Link> 
      </div>
    </div>
  );
}

export default LandingPage;
