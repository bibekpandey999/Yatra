"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  UserCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/en/admin/dashboard", icon: LayoutDashboard },
  { label: "Providers", href: "/en/admin/providers", icon: Truck },
  { label: "Customers", href: "/en/admin/customers", icon: Users },
  { label: "Rides", href: "#", icon: Route, disabled: true },
  { label: "Profile", href: "/en/admin/profile", icon: UserCircle },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-56 bg-white border-r-2 border-gray-200 flex flex-col p-4">
        <div className="text-lg font-semibold text-primary px-2 pb-6">
          Yatra admin
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.disabled ? "#" : item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  item.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.label}
                {item.disabled && (
                  <span className="ml-auto text-xs text-gray-400">soon</span>
                )}
              </Link>
            );
          })}
        </nav>
        <button className="mt-auto flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
          <LogOut size={18} />
          Log out
        </button>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}