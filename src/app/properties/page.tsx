import Navbar from "@/components/layout/Navbar";
import PropertyHero from "@/components/properties/hero";
import Filters from "@/components/properties/Filters";
import PropertyCards from "@/components/properties/PropertyCard";
import Footer from "@/components/layout/Footer";

export default function Properties() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <PropertyHero />

      {/* Main Listing Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Filter Sidebar (3 columns on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <Filters />
          </div>

          {/* Right Side: Property Cards List (8 columns on desktop) */}
          <div className="lg:col-span-8">
            <PropertyCards />
          </div>

        </div>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </main>
  );
}