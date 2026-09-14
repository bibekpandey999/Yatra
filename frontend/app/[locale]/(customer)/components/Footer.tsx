import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-8 py-10 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-lg font-bold">Yatra</span>
        <div className="flex gap-6 text-sm">
          <Link href="/en" className="hover:text-accent transition">
            Home
          </Link>
          <Link href="/en/login" className="hover:text-accent transition">
            Login
          </Link>
          <Link href="/en/register" className="hover:text-accent transition">
            Register
          </Link>
        </div>
        <span className="text-sm text-white/60">
          © 2026 Yatra. All rights reserved.
        </span>
      </div>
    </footer>
  );
}