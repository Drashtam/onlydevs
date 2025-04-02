<<<<<<< HEAD
'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">Inventory Management System</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-xl">
        Simplify your inventory tracking and management with our intuitive and efficient platform.
      </p>
      
      <div className="mt-6 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={() => router.push('/login')}
        >
          Login
        </button>
        <button
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          onClick={() => router.push('/signup')}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
=======
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      {/* Header */}
      <header className="absolute top-6 left-0 right-0 flex justify-between items-center px-12 text-white">
        <h1 className="text-3xl font-bold">OnlyDevs</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-300 cursor-pointer">Features</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mt-16 max-w-2xl text-white">
        <h2 className="text-5xl font-bold leading-tight">STOCKIFY</h2>
        <p className="text-2xl mt-4 text-gray-200">
          Track, organize, and optimize your stock in real time—all in one place.
        </p>

        <button
          className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          onClick={() => router.push("/login")}  
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default LandingPage;
>>>>>>> 1f11d9567050ca7d4274f1b7fe1923c05a6f5ae6
