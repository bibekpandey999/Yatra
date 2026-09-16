import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Image from "next/image";
import { Car, Package, Truck } from "lucide-react";
import Link from "next/link";


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

      <section>
        <div className="my-20 bg-white flex flex-col items-center justify-center px-6 gap-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
            How do you want to use Yatra?
          </h1>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">

            <Link
              href="/en/register"
              className="flex-1 shadow-lg rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <Car className="mx-auto text-primary mb-3" size={32} />

              <h3 className="font-semibold text-primary text-lg mb-2">
                Rider
              </h3>

              <p className="text-text-muted text-sm">
                Book rides and deliveries across the city.
              </p>

            </Link>

            <Link
              href="/en/register"
              className="flex-1 shadow-lg rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <Package className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-semibold text-primary text-lg mb-2">
                Delivery Partner
              </h3>
              <p className="text-text-muted text-sm">
                Deliver parcels and earn on your own schedule.
              </p>

            </Link>

            <Link
              href="/en/register"
              className="flex-1 shadow-lg rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <Truck className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-semibold text-primary text-lg mb-2">
                Bus/Truck Provider
              </h3>

              <p className="text-text-muted text-sm">
                List your vehicles for rentals and bookings.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}