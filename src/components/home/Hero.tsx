import React from 'react';
import { MapPin, Battery } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-6 bg-white sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 lg:mt-12 lg:px-8 xl:mt-16">
            <div className="sm:text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start justify-between">
              <div className="lg:w-1/2">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Charge Your EV with</span>
                  <span className="block text-green-500">Clean Solar Energy</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join the sustainable revolution. Find solar charging stations near you, track your environmental impact, and save money while saving the planet.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="/map" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                      Find Stations
                      <MapPin className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="/calculator" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Calculate Savings
                      <Battery className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side (Image) */}
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
                <img
                  className="w-full h-[55vh] object-cover rounded-lg shadow-lg absolute inset-0 top-0 left-0 right-0"
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Electric vehicle charging station"
                />
                <div className="absolute inset-0 bg-white opacity-60 rounded-lg"></div> {/* Overlay for blending */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
