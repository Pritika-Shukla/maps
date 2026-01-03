"use client";

import { useMemo } from "react";
import { MapMarker, MarkerContent, MarkerTooltip, Map } from "./map";
import { companiesData } from "@/lib/offices";

const colorMap: Record<string, string> = {
  black: "bg-black",
  green: "bg-green-500",
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  indigo: "bg-indigo-500",
};

// Function to calculate offset for markers at the same location
// Returns offset in degrees (small offset to spread markers)
function calculateOffset(index: number, total: number): { lngOffset: number; latOffset: number } {
  if (total <= 1) return { lngOffset: 0, latOffset: 0 };
  
  // Use a circular pattern to spread markers
  const radius = 0.002; // Small radius in degrees (~200m at equator)
  const angle = (2 * Math.PI * index) / total;
  
  return {
    lngOffset: radius * Math.cos(angle),
    latOffset: radius * Math.sin(angle),
  };
}

export default function Page() {
  const companyNames = companiesData.map((c) => c.company).join(", ");
  
  // Group offices by location and calculate offsets
  type MarkerItem = {
    companyData: typeof companiesData[0];
    office: typeof companiesData[0]['offices'][0];
    index: number;
  };
  
  type MarkerWithOffset = {
    companyData: typeof companiesData[0];
    office: typeof companiesData[0]['offices'][0];
    officeIndex: number;
    lng: number;
    lat: number;
  };
  
  const markersWithOffsets = useMemo(() => {
    // Create a map of location -> array of markers
    const locationMap: Record<string, MarkerItem[]> = {};
    
    companiesData.forEach((companyData) => {
      companyData.offices.forEach((office, officeIndex) => {
        // Round coordinates to 4 decimal places (~11m precision) to group nearby locations
        const locationKey = `${office.lng.toFixed(4)},${office.lat.toFixed(4)}`;
        
        if (!locationMap[locationKey]) {
          locationMap[locationKey] = [];
        }
        
        locationMap[locationKey].push({
          companyData,
          office,
          index: officeIndex,
        });
      });
    });
    
    // Calculate offsets for each location group
    const markers: MarkerWithOffset[] = [];
    
    Object.values(locationMap).forEach((markerGroup: MarkerItem[]) => {
      markerGroup.forEach((item: MarkerItem, groupIndex: number) => {
        const offset = calculateOffset(groupIndex, markerGroup.length);
        markers.push({
          companyData: item.companyData,
          office: item.office,
          officeIndex: item.index,
          lng: item.office.lng + offset.lngOffset,
          lat: item.office.lat + offset.latOffset,
        });
      });
    });
    
    return markers;
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full" style={{ touchAction: "pan-x pan-y" }}>
      {/* Label Overlay */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-xs sm:text-sm text-muted-foreground bg-background/90 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-1.5 border border-border/50 shadow-lg max-w-[calc(100%-1rem)] sm:max-w-none">
        <div className="truncate">{companyNames} Offices</div>
      </div>
      
      <Map 
        center={[0, 30]} 
        zoom={1.5}
        styles={{
          dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
          light: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        }}
      >
        {markersWithOffsets.map((marker, index) => {
          const colorClass = colorMap[marker.companyData.color] || "bg-gray-500";
          
          return (
            <MapMarker 
              key={`${marker.companyData.company}-${marker.office.city}-${marker.officeIndex}-${index}`} 
              longitude={marker.lng} 
              latitude={marker.lat}
            >
              <MarkerContent>
                <div className="rounded-full bg-white flex items-center justify-center p-1.5 sm:p-1">
                  {marker.companyData.logo ? (
                    <img 
                      src={marker.companyData.logo} 
                      alt={marker.companyData.company} 
                      className="w-5 h-5 sm:w-4 sm:h-4 object-contain"
                    />
                  ) : (
                    <div className={`w-5 h-5 sm:w-4 sm:h-4 rounded-full ${colorClass} flex items-center justify-center text-white text-[10px] sm:text-[9px] font-bold`}>
                      {marker.companyData.company.charAt(0)}
                    </div>
                  )}
                </div>
              </MarkerContent>
              <MarkerTooltip className="bg-gray-900/95 backdrop-blur-sm shadow-md px-3 py-2 sm:px-2 sm:py-1 rounded-md text-sm sm:text-xs border border-gray-800 min-w-[120px] sm:min-w-[100px]">
                <div className="text-center space-y-0.5">
                  <div className="font-semibold text-base sm:text-sm text-gray-200">
                    {marker.companyData.company}
                  </div>
                  
                  <div className="text-xs sm:text-[11px] text-gray-200">
                    {marker.office.city}
                  </div>
                </div>
              </MarkerTooltip>
            </MapMarker>
          );
        })}
      </Map>
    </div>
  );
}