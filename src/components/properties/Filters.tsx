"use client";

import { useState } from "react";
import { Filter, RotateCcw, ChevronDown } from "lucide-react";

export default function Filters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const propertyTypes = ["House", "Apartment", "Condo", "Townhouse", "Villa", "Land"];
  const amenitiesList = ["Pool", "Gym", "Parking", "Garden", "Pet Friendly"];

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleReset = () => {
    setSelectedTypes([]);
    setMinPrice("");
    setMaxPrice("");
    setBedrooms("Any");
    setBathrooms("Any");
    setSelectedAmenities([]);
  };

  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-emerald-600" />
          <h3 className="font-bold text-gray-900 text-base">Filters</h3>
        </div>
        <button
          onClick={handleReset}
          className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 active:scale-95"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Property Type */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Property Type
        </h4>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 select-none"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Price Range
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">Min Price</option>
              <option value="100000">$100k</option>
              <option value="250000">$250k</option>
              <option value="500000">$500k</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">Max Price</option>
              <option value="500000">$500k</option>
              <option value="750000">$750k</option>
              <option value="1000000">$1M+</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Bedrooms & Bathrooms Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Bedrooms */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Bedrooms
          </h4>
          <div className="relative">
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Bathrooms
          </h4>
          <div className="relative">
            <select
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Amenities */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Amenities
        </h4>
        <div className="space-y-2">
          {amenitiesList.map((amenity) => (
            <label
              key={amenity}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 select-none"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-emerald-600/20 active:scale-95">
        Apply Filters
      </button>
    </aside>
  );
}