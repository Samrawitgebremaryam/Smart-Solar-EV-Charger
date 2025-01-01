import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { StationMap } from './components/map/StationMap';
import { ChargingHistory } from './components/history/ChargingHistory';
import { SavingsCalculator } from './components/calculator/SavingsCalculator';
import { EnvironmentalImpact } from './components/impact/EnvironmentalImpact';
import { SignIn } from './components/layout/signin'; // Import SignIn component
import { SignUp } from './components/layout/signUp'; // Import SignUp component

function App() {
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/calculator':
        return <SavingsCalculator />;
      case '/history':
        return <ChargingHistory />;
      case '/map':
        return <StationMap />;
      case '/impact':
        return <EnvironmentalImpact />;
      case '/signin':
        return <SignIn />;
      case '/signup': // Add route for /signup
        return <SignUp />;
      default:
        return (
          <>
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderContent()}
    </div>
  );
}

export default App;
