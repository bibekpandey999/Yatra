import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary flex items-center justify-between px-8 py-4">
      <span className="text-white text-xl font-bold">Yatra</span>
      <div className="flex gap-3">
        <Link
          href="/en/login"
          className="text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-primary transition"
        >
          Login
        </Link>
        <Link
          href="/en/register"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}