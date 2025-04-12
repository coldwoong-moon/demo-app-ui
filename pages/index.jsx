import React from 'react';
import AppGallery from './AppGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">숭실대학교 AISW 융합학과 원우회</h1>
      <AppGallery />
    </div>
  );
} 