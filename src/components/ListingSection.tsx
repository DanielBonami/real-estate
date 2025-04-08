import PropertyCard from "./PropertyCard";

const sampleProperties = [
  {
    title: "Modern Family Home",
    location: "Los Angeles, CA",
    price: "$1,200,000",
    image: "/house1.jpg",
  },
  {
    title: "Cozy Apartment",
    location: "New York, NY",
    price: "$850,000",
    image: "/house2.jpg",
  },
  {
    title: "Luxury Villa",
    location: "Miami, FL",
    price: "$2,500,000",
    image: "/house3.jpg",
  },
];

const ListingSection = () => {
  return (
    <section className="px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleProperties.map((property, idx) => (
        <PropertyCard key={idx} {...property} />
      ))}
    </section>
  );
};

export default ListingSection;