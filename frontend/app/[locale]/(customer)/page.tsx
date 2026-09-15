import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section className="grid md:grid-cols-2 gap-6 px-8 pb-24 max-w-5xl  mx-auto">
        <div className=" rounded-2xl shadow-sm hover:shadow-lg overflow-hidden">
          <div className="relative h-52 w-full">
            <Image
              src="/ridesharing.png"
              alt="Yatra rides"
              fill
              className=" object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-primary">
              Rides
            </h3>

            <p className="mx-auto max-w-sm text-sm leading-6 text-text-muted">
              Book a bike or car and enjoy a safe, reliable ride with
              trusted transport providers.
            </p>

            <button className="mt-5 text-sm font-medium text-primary transition-colors hover:text-blue-700">
              Book a Ride →
            </button>
          </div>
        </div>

        <div className="rounded-2xl shadow-sm hover:shadow-lg overflow-hidden">
          <div className="relative h-52 w-full">
            <Image
              src="/BusRental.png"
              alt="Yatra rides"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-primary">
              Rental
            </h3>

            <p className="mx-auto max-w-sm text-sm leading-6 text-text-muted">
              Rent a bus or car and enjoy a safe, reliable tour with
              trusted transport providers.
            </p>

            <button className="mt-5 text-sm font-medium text-primary transition-colors hover:text-blue-700">
              Rent a vehicle →
            </button>
          </div>
        </div>


      </section>

      <Footer />
    </div>
  );
}