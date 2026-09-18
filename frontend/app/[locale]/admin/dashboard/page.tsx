"use client"

import { useEffect, useState } from "react";

interface StatsProps {
  totalCustomers: number,
  totalTransporters: number,
  kycPending: number,
  activeRides: number
}

export default function AdminDashboard() {

  const [stats, setStats] = useState<StatsProps>({
    totalCustomers: 0,
    totalTransporters: 0,
    kycPending: 0,
    activeRides: 0
  });

  const [loadingStat, setLoadingStat] = useState(false);


  useEffect(() => {

    const handleStats = async () => {
      try {
        setLoadingStat(true);
        const res = await fetch("/api/admin/dashboard-stats", {
          method: "GET",
          credentials: "include",
          cache: "no-store"
        })

        const data = await res.json();
        if (data.success) {
          setStats(data.stats);
        }

      } catch (err) {
        console.log("Failed to fetch dashboard stats: ", err)
      } finally {
        setLoadingStat(false);
      }
    };


    handleStats();
  }, []);


  const pendingProviders = [
    { name: "Niten Thapa", phone: "9812345678", vehicle: "Bus", status: "Pending" },
    { name: "Sahil Gurung", phone: "9801234567", vehicle: "Car", status: "Pending" },
    { name: "Samir Rana Magar", phone: "9801442366", vehicle: "Truck", status: "Pending" },
  ];

  const statCards = [
    {
        label: "Total Customers",
        value: stats.totalCustomers,
    },
    {
        label: "Transport Providers",
        value: stats.totalTransporters,
    },
    {
        label: "Pending KYC",
        value: stats.kycPending,
    },
    {
        label: "Active Rides",
        value: stats.activeRides,
    },
];

  return (
    <div className=" p-6 md:p-10">
      <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary">{loadingStat ? "..." : stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Pending KYC Verifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 text-gray-600 text-sm">
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Phone</th>
                <th className="py-3 px-2">Vehicle</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingProviders.map((provider) => (
                <tr key={provider.phone} className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-900">{provider.name}</td>
                  <td className="py-3 px-2 text-gray-900">{provider.phone}</td>
                  <td className="py-3 px-2 text-gray-900">{provider.vehicle}</td>
                  <td className="py-3 px-2">
                    <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-xs font-semibold">
                      {provider.status}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <button className="bg-accent text-white px-3 py-1 rounded-lg text-sm hover:bg-accent-dark transition">
                      Verify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}