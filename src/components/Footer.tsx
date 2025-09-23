'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2F1340] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-sm">© {new Date().getFullYear()} Astrawork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
