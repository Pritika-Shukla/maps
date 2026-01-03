"use client";

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

export default function Page() {
  const companyNames = companiesData.map((c) => c.company).join(", ");
  
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
        {companiesData.map((companyData) => {
          const colorClass = colorMap[companyData.color] || "bg-gray-500";
          
          return companyData.offices.map((office, index) => (
            <MapMarker 
              key={`${companyData.company}-${office.city}-${index}`} 
              longitude={office.lng} 
              latitude={office.lat}
            >
              <MarkerContent>
                <div className="rounded-full bg-white flex items-center justify-center p-1.5 sm:p-1">
                  {companyData.logo ? (
                    <img 
                      src={companyData.logo} 
                      alt={companyData.company} 
                      className="w-5 h-5 sm:w-4 sm:h-4 object-contain"
                    />
                  ) : (
                    <div className={`w-5 h-5 sm:w-4 sm:h-4 rounded-full ${colorClass} flex items-center justify-center text-white text-[10px] sm:text-[9px] font-bold`}>
                      {companyData.company.charAt(0)}
                    </div>
                  )}
                </div>
              </MarkerContent>
              <MarkerTooltip className="bg-gray-900/95 backdrop-blur-sm shadow-md px-3 py-2 sm:px-2 sm:py-1 rounded-md text-sm sm:text-xs border border-gray-800 min-w-[120px] sm:min-w-[100px]">
                <div className="text-center space-y-0.5">
                  <div className="font-semibold text-base sm:text-sm text-gray-200">
                    {companyData.company}
                  </div>
                  
                  <div className="text-xs sm:text-[11px] text-gray-200">
                    {office.city}
                  </div>
                </div>
              </MarkerTooltip>
            </MapMarker>
          ));
        })}
      </Map>
    </div>
  );
}