import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

export function StationMap() {
  const [stations, setStations] = useState<any[]>([]);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [filters, setFilters] = useState({
    availability: 'Any',
    distance: 10,
  });

  useEffect(() => {
    // Get user's current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        // Fetch nearby stations based on the user's location
        fetchStations(latitude, longitude);
      });
    }
  }, []);

  const fetchStations = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get('/api/stations', {
        params: {
          latitude,
          longitude,
          distance: filters.distance,
          availability: filters.availability,
        },
      });

      if (Array.isArray(response.data)) {
        setStations(response.data);
      } else {
        console.error('Expected array, but got:', response.data);
      }
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  useEffect(() => {
    if (userLocation) {
      const map = L.map('map', {
        center: [userLocation.lat, userLocation.lng],
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Add user's location marker
      L.marker([userLocation.lat, userLocation.lng])
        .addTo(map)
        .bindPopup('Your Location')
        .openPopup();

      // Add stations' markers
      stations.forEach((station) => {
        L.marker([station.lat, station.lng])
          .addTo(map)
          .bindPopup(`<b>${station.name}</b><br>${station.address}`);
      });

      // Cleanup on unmount
      return () => {
        map.remove();
      };
    }
  }, [stations, userLocation]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-100 relative">
      {/* Layout for the filter section and the map */}
      <div className="flex h-full">
        {/* Filter Section */}
        <div className="p-4 w-full md:w-1/4 bg-white shadow-lg z-10 absolute top-4 left-4">
          <h2 className="text-xl font-bold mb-4">Find Solar Charging Stations</h2>
          <div className="space-y-4">
            <input
              id="pac-input"
              type="text"
              placeholder="Search for a place"
              className="w-full px-4 py-2 border rounded-md"
              aria-label="Search Location"
            />
            <div className="flex gap-2">
              <label htmlFor="availability" className="sr-only">Availability</label>
              <select
                id="availability"
                name="availability"
                value={filters.availability}
                onChange={handleFilterChange}
                className="flex-1 px-4 py-2 border rounded-md"
              >
                <option>Any Status</option>
                <option>Available</option>
              </select>
              <label htmlFor="distance" className="sr-only">Distance</label>
              <select
                id="distance"
                name="distance"
                value={filters.distance}
                onChange={handleFilterChange}
                className="flex-1 px-4 py-2 border rounded-md"
              >
                <option value={10}>10 km</option>
                <option value={20}>20 km</option>
                <option value={50}>50 km</option>
              </select>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative">
          <div
            id="map"
            className="h-full w-[75%] absolute top-0 right-0"
            style={{ height: '100vh' }}
          ></div>
        </div>
      </div>

      {/* User Location Display */}
      {userLocation && (
        <div className="absolute bottom-4 left-4 z-10 text-lg">
          <p>Your Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</p>
        </div>
      )}
    </div>
  );
}
