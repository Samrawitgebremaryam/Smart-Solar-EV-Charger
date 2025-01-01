import { useState, useEffect } from "react";

export function ImpactChart() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating loading delay
    setLoading(false); 
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg max-w-4xl">
      <h2 className="text-3xl font-extrabold text-left text-gray-800 mb-6">
        Environmental Impact
      </h2>
      
      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Loading data...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Total Impact */}
          <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Total Impact</h3>
            <p className="text-4xl font-extrabold text-gray-800">1,250 kg</p>
            <p className="text-lg text-gray-600">CO₂ Reduced</p>
            <p className="mt-4 text-left text-gray-500">
              By supporting clean solar energy, you've helped reduce 1,250 kg of CO₂ emissions.
              This is equivalent to removing gas cars off the road for over 3,000 miles!
            </p>
          </div>

          {/* Impact Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Trees Equivalent */}
            <div className="h-40 bg-white rounded-lg p-6 flex flex-col items-start justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm font-medium text-green-600 mb-2">Trees Equivalent</h3>
              <p className="text-3xl font-semibold text-gray-800">57 trees</p>
              <p className="text-gray-500 text-sm">Equivalent to the CO₂ absorption of 57 trees over a year.</p>
            </div>

            {/* Gas Car Miles Offset */}
            <div className="h-40 bg-white rounded-lg p-6 flex flex-col items-start justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm font-medium text-green-600 mb-2">Gas Car Miles Offset</h3>
              <p className="text-3xl font-semibold text-gray-800">3,125 mi</p>
              <p className="text-gray-500 text-sm">This is the distance offset from a typical gas-powered car.</p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-lg p-6 mt-4 shadow-md">
            <p className="text-left text-xl font-semibold text-gray-800 leading-relaxed mb-6">
              By supporting solar energy, you're making a huge difference! 
              Keep up the great work in reducing carbon footprints and promoting sustainability for a cleaner future.
            </p>
            <div className="mt-4 text-left">
              <a
                href="https://www.greencitytimes.com/the-environmental-benefits-of-solar-power/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md shadow-md transition-colors duration-300">
                  Learn More About Impact
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
