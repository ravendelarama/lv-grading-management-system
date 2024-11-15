import React from 'react';
import { CardPortal } from '@/components/landing-page-component/CardsPortal';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <img
        src="https://res.cloudinary.com/dihmqs39z/image/upload/v1731654756/LV-Logo_gjbcpk.png"
        alt="LV Logo"
        className="w-32 h-auto mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Welcome to the Grading Management System
      </h1>
      <CardPortal />
    </div>
  );
};

export default LandingPage;
