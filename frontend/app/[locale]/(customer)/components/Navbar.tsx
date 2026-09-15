import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] flex items-center justify-between px-8 py-3">
      <Image src="/logo.png" alt="Yatra" width={100} height={30}
        className="invert" />
      <div className="flex gap-3">
        <Link
          href="/en/login"
          className="text-[#60A5FA] px-4 py-2 rounded border border-white hover:text-white transition"
        >
          Login
        </Link>
        <Link
          href="/en/register"
          className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}