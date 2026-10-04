"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight, Compass } from "lucide-react";
import { properties, PropertyDataObj } from "@/data/mockProperties";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MapPage() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyDataObj>(properties[0]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full pt-24">
        {/* Header Title */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Properties on Map</h1>
            <p className="text-sm text-gray-500 mt-1">
              Explore properties in your preferred locations with interactive map view
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-200">
            <Compass className="w-4 h-4" /> Interactive Map View
          </div>
        </div>

        {/* Map Container with Styled Grid Background */}
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-slate-900 mb-6 flex items-center justify-center">
          {/* Map Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs border border-white/10">
            Click pins below to inspect property
          </div>

          {/* Interactive Map Pins */}
          {properties.map((property, idx) => {
            const isSelected = selectedProperty.id === property.id;
            const positions = [
              { top: "35%", left: "30%" },
              { top: "55%", left: "60%" },
              { top: "25%", left: "70%" },
              { top: "70%", left: "40%" },
            ];
            const pos = positions[idx % positions.length];

            return (
              <button
                key={property.id}
                onClick={() => setSelectedProperty(property)}
                style={{ top: pos.top, left: pos.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full shadow-2xl font-bold text-xs flex items-center gap-1.5 transition-all transform hover:scale-110 ${
                  isSelected
                    ? "bg-emerald-500 text-gray-950 ring-4 ring-emerald-500/40 z-20 scale-110"
                    : "bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-300 hover:border-emerald-400 z-10"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-gray-950" : "text-emerald-600"}`} />
                ${(property.price / 1000).toFixed(0)}k
              </button>
            );
          })}
        </div>

        {/* Bottom Current Selected Property Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-full sm:w-48 h-40 rounded-xl overflow-hidden shrink-0">
            <Image
              src={selectedProperty.image}
              alt={selectedProperty.title}
              fill
              className="object-cover"
            />
            <span className={`absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${
              selectedProperty.tag === "For Sale" ? "bg-emerald-600" : "bg-blue-600"
            }`}>
              {selectedProperty.tag}
            </span>
          </div>

          <div className="flex-1 w-full space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xl font-bold text-emerald-600">
                  ${selectedProperty.price.toLocaleString()}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                  {selectedProperty.title}
                </h3>
              </div>
              <Link
                href={`/properties/${selectedProperty.id}`}
                className="px-4 py-2 bg-gray-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1 shrink-0"
              >
                View Details <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{selectedProperty.location}</span>
            </p>

            <div className="flex items-center gap-4 text-xs font-medium text-gray-600 pt-2 border-t border-gray-100">
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-emerald-600" /> {selectedProperty.bedrooms} Beds</span>
              <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-emerald-600" /> {selectedProperty.bathrooms} Baths</span>
              <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5 text-emerald-600" /> {selectedProperty.sqft} sqft</span>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}