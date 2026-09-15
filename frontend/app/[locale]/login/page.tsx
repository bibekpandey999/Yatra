"use client";
import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <form className="flex flex-col gap-4 border rounded-lg p-8 w-80">
        <h1 className="text-xl font-semibold text-primary">Login</h1>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="rider">Rider</option>
          <option value="transporter">Bus/Truck Provider</option>
        </select>
        <button className="bg-primary text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}