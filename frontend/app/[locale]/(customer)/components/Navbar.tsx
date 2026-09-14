import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-primary flex items-center justify-between px-8 py-4">
      <Image src="/logo.png" alt="Yatra" width={120} height={40}
      className="invert"  /> 
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