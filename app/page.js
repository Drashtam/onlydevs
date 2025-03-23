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