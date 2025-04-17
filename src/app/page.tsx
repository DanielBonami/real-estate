// src/pages/home.tsx (or your correct page path)
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "California, USA",
    price: 1500000,
    image: "/house1.jpg",
  },
  {
    id: 2,
    title: "Cozy Apartment",
    location: "New York, USA",
    price: 850000,
    image: "/house2.jpg",
  },
  {
    id: 3,
    title: "Modern Condo",
    location: "Miami, USA",
    price: 950000,
    image: "/house3.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-100">
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}  // The unique key for React elements
              id={property.id}    // Pass id directly as a number
              title={property.title}
              location={property.location}
              price={`$${property.price.toLocaleString()}`}
              image={property.image}
            />
          ))}
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
