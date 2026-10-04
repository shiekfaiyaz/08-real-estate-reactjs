"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Banner() {
  return (
    <section className="py-12 w-full flex justify-center">
      {/* Main Container: 90% Width, Rounded 20px */}
      <div className="relative w-[90%] max-w-7xl min-h-[420px] rounded-[20px] overflow-hidden flex items-center p-8 md:p-12 shadow-xl border border-emerald-100">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/images/banner.jpg"
            alt="Banner House Image"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/40" />
        </div>

        {/* Flex Content: Left Title, Right Stats Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Leftside: Title & Subtitle */}
          <div className="lg:col-span-7 space-y-4 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/30">
              Why Choose Us
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              More than just a House, <br />
              <span className="text-emerald-400">it&apos;s a Future</span>
            </h3>
            <p className="text-sm md:text-base text-gray-200 max-w-lg font-normal">
              Find the right property that fits your lifestyle and budget with ease and full confidence.
            </p>
            <div className="pt-2">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-emerald-600/30 active:scale-95"
              >
                Explore Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Rightside: Numbers Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-emerald-100/50 w-full max-w-xs grid grid-cols-1 gap-5 text-gray-900">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl shrink-0">
                  10K+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">10,000+</h4>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl shrink-0">
                  5K+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">5,000+</h4>
                  <p className="text-xs text-gray-500">Properties Listed</p>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Stat 3 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 fill-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">4.8 / 5.0</h4>
                  <p className="text-xs text-gray-500">Average Rating</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}