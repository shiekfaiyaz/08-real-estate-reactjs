"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Heart, ArrowRight } from "lucide-react";

export default function FeaturedCards() {
  const featuredProperties = [
    {
      id: "1",
      image: "/images/featured1.jpg",
      price: "$450,000",
      title: "Modern Family House",
      location: "Austin, Texas",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      tag: "For Sale",
    },
    {
      id: "2",
      image: "/images/featured2.jpg",
      price: "$2,800/mo",
      title: "Luxury Glass Villa",
      location: "Miami, Florida",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      tag: "For Rent",
    },
    {
      id: "3",
      image: "/images/featured3.jpg",
      price: "$890,000",
      title: "Penthouse Apartment",
      location: "New York, NY",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      tag: "For Sale",
    },
    {
      id: "4",
      image: "/images/featured4.jpg",
      price: "$620,000",
      title: "Cozy Suburban Cottage",
      location: "Seattle, Washington",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      tag: "For Sale",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title & View All */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Exclusive Listings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Featured Properties
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Handpicked properties available for buy & rent
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View all properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Property Cards Grid (Adjusted for 4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full">
                  {property.tag}
                </span>
                <button
                  aria-label="Save Property"
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-colors shadow-sm"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Details Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-emerald-600">
                    {property.price}
                  </h3>
                  <Link href={`/properties/${property.id}`}>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1 mt-1">
                      {property.title}
                    </h4>
                  </Link>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </p>
                </div>

                {/* Specs */}
                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-emerald-600" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5 text-emerald-600" />
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="w-3.5 h-3.5 text-emerald-600" />
                    {property.sqft} sqft
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}