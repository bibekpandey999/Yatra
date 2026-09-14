import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-24 max-w-5xl mx-auto">
        <div className="border rounded-lg p-6 text-center">
          <h3 className="font-semibold text-primary text-lg mb-2">Rides</h3>
          <p className="text-text-muted text-sm">
            Book a bike or car and get picked up in minutes.
          </p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h3 className="font-semibold text-primary text-lg mb-2">
            Vehicle Rental
          </h3>
          <p className="text-text-muted text-sm">
            Reserve a car or bus for a day, a trip, or longer.
          </p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h3 className="font-semibold text-primary text-lg mb-2">
            Deliveries
          </h3>
          <p className="text-text-muted text-sm">
            Send parcels and goods anywhere, tracked in real time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}