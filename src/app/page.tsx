import HeroSection from "../components/HeroSection";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PropertyCard
            id="modern-villa"
            title="Modern Villa"
            location="Beverly Hills, CA"
            price="$3,200,000"
            image="/house1.jpg"
          />
          <PropertyCard
            id="cozy-cottage"
            title="Cozy Cottage"
            location="Aspen, CO"
            price="$1,150,000"
            image="/house2.jpg"
          />
          <PropertyCard
            id="luxury-apartment"
            title="Luxury Apartment"
            location="Manhattan, NY"
            price="$2,400,000"
            image="/house3.jpg"
          />
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DreamHome?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer the best selection of homes and real estate opportunities, supported by top-notch service and local expertise.
        </p>
      </section>
    </main>
  );
}
