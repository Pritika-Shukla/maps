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

const colorTextMap: Record<string, string> = {
  black: "text-black",
  green: "text-green-500",
  purple: "text-purple-500",
  blue: "text-blue-500",
  red: "text-red-500",
  orange: "text-orange-500",
  indigo: "text-indigo-500",
};

export default function Page() {
  const companyNames = companiesData.map((c) => c.company).join(", ");
  
  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Label Overlay */}
      <div className="absolute top-4 left-4 z-10 text-sm text-muted-foreground bg-background/90 backdrop-blur-sm rounded px-3 py-1.5 border border-border/50 shadow-lg">
        {companyNames} Offices
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
          const textColorClass = colorTextMap[companyData.color] || "text-gray-500";
          
          return companyData.offices.map((office, index) => (
            <MapMarker 
              key={`${companyData.company}-${office.city}-${index}`} 
              longitude={office.lng} 
              latitude={office.lat}
            >
              <MarkerContent>
                <div className="relative flex items-center justify-center">
                  <div className={`absolute size-12 rounded-full ${colorClass}/20`} />
                  <div className={`absolute size-9 rounded-full ${colorClass}/30 animate-ping`} style={{ animationDuration: "2s" }} />
                  <div className={`relative size-10 rounded-full bg-white border-2 ${colorClass} shadow-lg ${colorClass}/50 flex items-center justify-center p-1`}>
                    {companyData.logo ? (
                      <img 
                        src={companyData.logo} 
                        alt={companyData.company} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full ${colorClass} flex items-center justify-center text-white text-xs font-bold`}>
                        {companyData.company.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
              </MarkerContent>
              <MarkerTooltip>
                <div className="text-center">
                  <div className={`font-medium ${textColorClass}`}>{office.name}</div>
                  <div className="text-xs text-muted-foreground">{office.city}</div>
                </div>
              </MarkerTooltip>
            </MapMarker>
          ));
        })}
      </Map>
    </div>
  );
}