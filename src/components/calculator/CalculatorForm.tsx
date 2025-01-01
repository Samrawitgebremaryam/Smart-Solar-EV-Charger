import React, { useState } from "react";

interface CalculatorFormProps {
  onCalculate: (data: { usage: number; source: string }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [usage, setUsage] = useState(300); // kWh
  const [source, setSource] = useState("grid");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculate({ usage, source }); // Pass form data to parent
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Charging Usage (kWh)
          </label>
          <input
            type="number"
            value={usage}
            onChange={(e) => setUsage(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="300"
          />
        </div>
        <div>
          <label htmlFor="power-source" className="block text-sm font-medium text-gray-700 mb-1">
            Power Source
          </label>
          <select
            id="power-source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="grid">Grid</option>
            <option value="solar">Solar</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Calculate Price
        </button>
      </form>
    </div>
  );
}
