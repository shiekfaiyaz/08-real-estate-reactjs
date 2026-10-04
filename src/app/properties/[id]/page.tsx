"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Car,
  CheckCircle2,
  Heart,
  Share2,
  ExternalLink,
  ShieldCheck,
  Send
} from "lucide-react";
import { properties, PropertyDataObj } from "@/data/mockProperties";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const propertyId = Number(id);

  // Find target property or fallback to first property
  const property = properties.find((p) => p.id === propertyId) || properties[0];

  // Similar properties (exclude current property and take up to 3)
  const similarProperties = properties.filter((p) => p.id !== property.id).slice(0, 3);

  const { toggleWishlist, isLiked } = useWishlistStore();
  const liked = isLiked(property.id);

  const [formSubmitted, setFormSubmitted] = useState(false);


  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full pt-24">

        {/* Top Back Navigation & Actions */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200/80 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Listings
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleWishlist(property.id)}
              className="p-2.5 bg-white rounded-xl border border-gray-200/80 text-gray-600 hover:text-red-500 transition-colors shadow-sm"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            <button
              className="p-2.5 bg-white rounded-xl border border-gray-200/80 text-gray-600 hover:text-emerald-600 transition-colors shadow-sm"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. Image Gallery: 1 Big Image Left + Grid Right */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden shadow-sm bg-gray-100 mb-8 border border-gray-200">
          {/* Main Big Image */}
          <div className="md:col-span-2 relative h-[300px] md:h-[420px]">
            <Image
              src={property.gallery[0] || property.image}
              alt={property.title}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${property.tag === "For Sale" ? "bg-emerald-600" : "bg-blue-600"
              }`}>
              {property.tag}
            </span>
          </div>

          {/* 4 Small Images Rightside Grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 h-[300px] md:h-[420px]">
            {(property.gallery.length > 1 ? property.gallery.slice(1, 5) : Array(4).fill(property.image)).map((img, idx) => (
              <div key={idx} className="relative h-full overflow-hidden">
                <Image
                  src={img}
                  alt={`${property.title} view ${idx + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">Asking Price</span>
            <span className="text-3xl md:text-4xl font-bold text-emerald-600">
              ${property.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* 3. Specs Bar */}
        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Bedrooms</p>
              <p className="text-sm font-bold text-gray-900">{property.bedrooms} Beds</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Bath className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Bathrooms</p>
              <p className="text-sm font-bold text-gray-900">{property.bathrooms} Baths</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Maximize className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Area</p>
              <p className="text-sm font-bold text-gray-900">{property.sqft.toLocaleString()} sqft</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Garage</p>
              <p className="text-sm font-bold text-gray-900">{property.garage} Vehicles</p>
            </div>
          </div>
        </div>

        {/* 4. Content Grid (Left Details + Right Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">

          {/* Left Details */}
          <div className="lg:col-span-8 space-y-8">

            {/* Description */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Location</h3>
                <Link
                  href="/map"
                  className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  Open Full Map <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                <Image
                  src="/images/map.jpg"
                  alt="Map Location"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-gray-900">{property.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Rightside Agent Form Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg space-y-5">

              {/* Agent Header */}
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-emerald-100 border-2 border-emerald-500 shrink-0">
                  <Image
                    src="/images/agent.jpg"
                    alt="Property Agent"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Alex Morgan</h4>
                  <p className="text-xs text-gray-500 font-medium">Senior Real Estate Agent</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Partner
                  </span>
                </div>
              </div>

              {/* Upwork Compliant Demo Notice */}
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-800 space-y-1">
                <p className="font-bold">Portfolio Demo Disclaimer</p>
                <p className="text-[11px] text-emerald-700 leading-tight">
                  This form is for UI function presentation only. No private data or real contact details are recorded.
                </p>
              </div>

              {/* Form inputs */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                  setTimeout(() => setFormSubmitted(false), 3000);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-emerald-500 text-gray-800"
                  />
                </div>



                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    defaultValue={`Hi, I'm interested in ${property.title}...`}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-emerald-500 text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-emerald-600/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Inquiry
                </button>


              </form>

            </div>
          </div>

        </div>

        {/* 5. Similar Properties Section */}
        <div className="pt-12 border-t border-gray-200 mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Similar Properties</h2>
              <p className="text-xs text-gray-500 mt-1">Explore similar homes you might love</p>
            </div>
            <Link
              href="/properties"
              className="text-xs font-semibold text-emerald-600 hover:underline"
            >
              View All Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((simProp: PropertyDataObj) => (
              <div
                key={simProp.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={simProp.image}
                    alt={simProp.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${simProp.tag === "For Sale" ? "bg-emerald-600" : "bg-blue-600"
                    }`}>
                    {simProp.tag}
                  </span>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-lg font-bold text-emerald-600">
                      ${simProp.price.toLocaleString()}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm mt-0.5 line-clamp-1">
                      {simProp.title}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{simProp.location}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600 font-medium">
                    <span>{simProp.bedrooms} Beds • {simProp.bathrooms} Baths</span>
                    <Link
                      href={`/properties/${simProp.id}`}
                      className="text-emerald-600 font-bold hover:underline"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}