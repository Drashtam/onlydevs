"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/api";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const data = await registerUser(username, email, password);
    if (data.message) {
      router.push("/login");
    } else {
      setError(data.error || "Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/backgroundGetStarted.jpg')", filter: "brightness(70%)" }}></div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <img src="/logoLogin.png" alt="Signup Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4 text-center text-black">Create Your Account </h1>
          <h2 className="text-sm font-light text-center text-gray-400 mb-10">Join us today! Enter your details below.</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 shadow-sm rounded mt-1 text-black mb-3"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 shadow-sm rounded mt-1 text-black mb-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 shadow-sm rounded mt-1 text-black"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-sky-500 text-white p-2 rounded hover:bg-blue-600 mb-11">
              Get Started
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Already have an account? <a href="/login" className="text-sky-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
