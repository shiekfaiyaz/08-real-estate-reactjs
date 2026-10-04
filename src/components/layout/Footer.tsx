

"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
          
          {/* Left Side: Logo & Subtitle */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold tracking-wide text-white">
                Nestora
              </span>
            </Link>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Find your dream properties with confidence. A modern real estate platform showcasing modern architecture and clean design.
            </p>
          </div>

          {/* Right Side: Demo Quick Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/" className="hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties?type=buy" className="hover:text-emerald-400 transition-colors">
                    Buy Properties
                  </Link>
                </li>
                <li>
                  <Link href="/properties?type=rent" className="hover:text-emerald-400 transition-colors">
                    Rent Properties
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Features
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/properties" className="hover:text-emerald-400 transition-colors">
                    All Listings
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="hover:text-emerald-400 transition-colors">
                    Map View
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="hover:text-emerald-400 transition-colors">
                    Saved ❤️
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">Privacy Policy</span>
                </li>
                <li>
                  <span className="text-gray-500">Terms of Use</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Upwork Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Nestora. All rights reserved.</p>
          <p className="bg-gray-800/80 px-3 py-1 rounded-full text-emerald-400 border border-gray-700/50">
            Demo practice project built for portfolio presentation
          </p>
        </div>
      </div>
    </footer>
  );
}