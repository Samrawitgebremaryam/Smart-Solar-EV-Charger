import React, { useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { SavingsBreakdown } from "./SavingsBreakdown";

export function SavingsCalculator() {
  const [data, setData] = useState({
    gridCost: 0,
    solarCost: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    totalAmountToPay: 0, // New state to track the total amount the user has to pay
  });

  // Fixed rates in Birr
  const gridRate = 0.5; // 5 Birr/kWh
  const solarRate = 0.2; // 2 Birr/kWh

  const handleCalculate = ({ usage, source }: { usage: number; source: string }) => {
    // Default grid cost is calculated based on the grid rate
    const gridCost = usage * gridRate;

    // Initialize solar cost based on the source
    let solarCost = 0;
    
    if (source === "solar") {
      // Only calculate solar cost if solar is used
      solarCost = usage * solarRate;
    }

    // Monthly savings: difference between grid cost and solar cost
    const monthlySavings = gridCost - solarCost;

    // Yearly savings projection: monthly savings * 12
    const yearlySavings = monthlySavings * 12;

    // Determine total amount to pay
    const totalAmountToPay = source === "solar" ? solarCost : gridCost;

    // Update state with the calculated values
    setData({
      gridCost,
      solarCost,
      monthlySavings,
      yearlySavings,
      totalAmountToPay, // Add total amount to pay here
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Solar Savings Calculator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CalculatorForm onCalculate={handleCalculate} />
        <SavingsBreakdown data={data} />
      </div>
    </div>
  );
}
