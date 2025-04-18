// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
