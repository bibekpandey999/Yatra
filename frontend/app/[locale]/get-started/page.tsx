import Link from "next/link";

export default function GetStarted() {
    return(

        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
                How do you want to use Yatra? 
            </h1>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">

                <Link
                href="/en/register"
                className="flex-1 border rounded-lg p-6 text-center hover:border-accent transition"
                >
                    <h3 className="font-semibold text-primary text-lg mb-2">
                        Rider
                    </h3>

                    <p className="text-text-muted text-sm">
                        Book rides and deliveries across the city.
                    </p>

                </Link>

                <Link
                href="/en/register"
                className="flex-1 border rounded-lg p-6 text-center hover:border-accent transition"
                >
                    <h3 className="font-semibold text-primary text-lg mb-2">
                        Delivery Partner
                    </h3>
                    <p className="text-text-muted text-sm">
                        Deliver parcels and earn on your own schedule.
                    </p>

                </Link>

                <Link
                href="/en/register"
                className="flex-1 border rounded-lg p-6 text-center hover:border-accent transition"
                >
                    <h3 className="font-semibold text-primary text-lg mb-2">
                        Bus/Truck Provider
                    </h3>
                    
                    <p className="text-text-muted text-sm">
                        List your vehicles for rentals and bookings.
                    </p>
                </Link>
            </div>
        </div>
    )
}