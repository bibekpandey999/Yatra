"use client";
import { useState } from "react";

export default function AdminProfile() {
  const [name, setName] = useState("Admin User");
  const phone = "9800000000";

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-primary mb-8">Profile</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <div className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Account Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ name });
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 w-full"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Phone</label>
              <input
                type="tel"
                value={phone}
                disabled
                className="border-2 border-gray-200 bg-gray-100 p-3 rounded-lg text-base text-gray-500 w-full cursor-not-allowed"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition w-full"
            >
              Save changes
            </button>
          </form>
        </div>

        <div className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Change Password</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ oldPassword, newPassword });
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 w-full"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent-dark transition w-full"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}