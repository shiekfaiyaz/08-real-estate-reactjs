



"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Bed, Bath, Maximize, ArrowUpRight, Home } from "lucide-react";
import { properties } from "@/data/mockProperties";
import { useWishlistStore } from "@/store/useWishlistStore";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SavedPropertiesPage() {
  const { wishlist, toggleWishlist } = useWishlistStore();

  const savedList = properties.filter((p) => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full pt-24">
        {/* Header Title */}
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Saved Properties</h1>
          <p className="text-sm text-gray-500 mt-1">
            You have <span className="font-semibold text-emerald-600">{savedList.length}</span> properties in your wishlist
          </p>
        </div>

        {/* Empty State */}
        {savedList.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200/80 shadow-sm max-w-lg mx-auto my-12 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Your wishlist is empty</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Explore our properties listing and click the heart icon on any home to save it here for quick comparison.
            </p>
            <Link
              href="/properties"
              className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-emerald-600/20"
            >
              Browse Properties
            </Link>
          </div>
        ) : (
          /* Saved Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedList.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Wishlist Button */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${
                    property.tag === "For Sale" ? "bg-emerald-600" : "bg-blue-600"
                  }`}>
                    {property.tag}
                  </span>

                  <button
                    onClick={() => toggleWishlist(property.id)}
                    aria-label="Remove from Wishlist"
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-red-500 hover:scale-110 shadow-md transition-transform"
                  >
                    <Heart className="w-4 h-4 fill-red-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xl font-bold text-emerald-600">
                      ${property.price.toLocaleString()}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </p>
                  </div>

                  {/* Specs & Link */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-600">
                    <div className="flex items-center gap-3">
                      <span>{property.bedrooms} Beds</span>
                      <span>•</span>
                      <span>{property.bathrooms} Baths</span>
                      <span>•</span>
                      <span>{property.sqft} sqft</span>
                    </div>

                    <Link
                      href={`/properties/${property.id}`}
                      className="p-2 bg-gray-900 hover:bg-emerald-600 text-white rounded-xl transition-colors flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}