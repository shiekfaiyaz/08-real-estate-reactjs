"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Car, 
  ArrowUpRight 
} from "lucide-react";
import { properties, PropertyDataObj } from "@/data/mockProperties";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function PropertyCards() {
  const { toggleWishlist, isLiked } = useWishlistStore();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Showing <span className="font-semibold text-emerald-600">{properties.length}</span> properties found
          </p>
        </div>
      </div>

      {/* Cards List Layout */}
      <div className="flex flex-col gap-6">
        {properties.map((property: PropertyDataObj) => {
          const liked = isLiked(property.id);

          return (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
            >
              {/* Left Side: Image container */}
              <div className="relative w-full md:w-80 h-64 md:h-auto shrink-0 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${
                  property.tag === "For Sale" ? "bg-emerald-600" : "bg-blue-600"
                }`}>
                  {property.tag}
                </span>

                {/* Wishlist Button (Mobile) */}
                <button
                  onClick={() => toggleWishlist(property.id)}
                  aria-label="Add to Wishlist"
                  className="md:hidden absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-500 shadow-md transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      liked ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Center & Right Side: Content Details */}
              <div className="flex-1 p-5 md:p-6 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${property.price.toLocaleString()}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {property.title}
                      </h3>
                    </div>

                    {/* Wishlist Button (Desktop) */}
                    <button
                      onClick={() => toggleWishlist(property.id)}
                      aria-label="Add to Wishlist"
                      className="hidden md:flex items-center justify-center p-2.5 rounded-full bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 transition-all border border-gray-200"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          liked ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{property.location}</span>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Bottom Stats & CTA Button */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-600 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Bed className="w-4 h-4 text-emerald-600" />
                      <span>{property.bedrooms} Beds</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Bath className="w-4 h-4 text-emerald-600" />
                      <span>{property.bathrooms} Baths</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Maximize className="w-4 h-4 text-emerald-600" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Car className="w-4 h-4 text-emerald-600" />
                      <span>{property.garage} Garage</span>
                    </div>
                  </div>

                  <Link
                    href={`/properties/${property.id}`}
                    className="w-full sm:w-auto px-4 py-2 bg-gray-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}