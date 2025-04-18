// src/components/ui/CardContent.jsx
import React from 'react';

const CardContent = ({ title, value, icon }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-gray-100 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default CardContent;
