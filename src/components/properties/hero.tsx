"use client";

import Image from "next/image";
import { Search, MapPin, Building, DollarSign, Home } from "lucide-react";

export default function PropertyHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-between pt-24 pb-12 px-6">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-1 w-full h-full">
        <Image
          src="/images/propertie-hero1.jpg"
          alt="Luxury Real Estate Home"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Title & Subtitle */}
      <div className="max-w-7xl w-full mx-auto my-auto py-12 z-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/30">
            Real Estate Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Find Properties Near You
          </h1>
          <p className="text-base md:text-lg text-gray-200 font-normal leading-relaxed">
            Explore homes, apartments, and more with our easy lists and clean filters.
          </p>
        </div>
      </div>

      {/* Floating Search Container */}
      <div className="max-w-5xl w-[90%] z-10 md:w-[80%] mx-auto bg-white backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl border border-emerald-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
          
          {/* Location */}
          <div className="flex flex-col gap-1.5 border-b sm:border-b-0 sm:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-3">
            <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Location
            </label>
            <select className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none cursor-pointer">
              <option value="">City or Area</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="miami">Miami</option>
            </select>
          </div>

          {/* Purpose */}
          <div className="flex flex-col gap-1.5 border-b sm:border-b-0 lg:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-3">
            <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-emerald-600" /> Purpose
            </label>
            <select className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none cursor-pointer">
              <option value="buy">Buy Property</option>
              <option value="rent">Rent Property</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1.5 border-b sm:border-b-0 sm:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-3">
            <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" /> Price Range
            </label>
            <select className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none cursor-pointer">
              <option value="">Any Price</option>
              <option value="100k-300k">$100k - $300k</option>
              <option value="300k-600k">$300k - $600k</option>
              <option value="600k+">$600k+</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-1.5 pb-2 sm:pb-0">
            <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-emerald-600" /> Property Type
            </label>
            <select className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none cursor-pointer">
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
          </div>

        </div>

        {/* Search Button */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          <button className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}