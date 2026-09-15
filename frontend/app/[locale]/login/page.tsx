"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <form className="flex flex-col gap-4 border-2 border-gray-200 shadow-lg rounded-lg p-8 w-80 bg-white">
        <h1 className="text-xl font-semibold text-primary">Login</h1>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-ray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-ray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border-2 border-ray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
        >
          <option value="rider">Passenger</option>
          <option value="transporter">Rider</option>
          <option value="booking-partner">Booking Partner</option>
        </select>
        <p className="text-sm text-gray-600 text-center">
            Don't have an account? {""}
            <Link href="/en/register" className="text-primary font-semibold">
            Register
            </Link>
        </p>
        <button className="bg-primary text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}