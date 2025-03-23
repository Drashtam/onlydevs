// app/signup/page.js
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className="w-full p-2 border mb-4 text-gray-600" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" className="w-full p-2 border mb-4 text-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-2 border mb-4 text-gray-600" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
