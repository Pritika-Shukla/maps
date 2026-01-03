export type Office = {
  lng: number;
  lat: number;
  name: string;
  city: string;
};

export type CompanyOffices = {
  company: string;
  color: string;
  logo?: string;
  offices: Office[];
};

export const companiesData: CompanyOffices[] = [
  {
    company: "Vercel",
    color: "black",
    logo: "/vercel.svg",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Vercel HQ", city: "San Francisco, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Vercel", city: "New York, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Vercel", city: "London, UK" },
      { lng: 139.6917, lat: 35.6895, name: "Vercel", city: "Tokyo, Japan" },
      { lng: 103.8198, lat: 1.3521, name: "Vercel", city: "Singapore" },
    ],
  },
  {
    company: "Mintlify",
    color: "green",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Mintlify HQ", city: "San Francisco, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Mintlify", city: "New York, USA" },
    ],
  },
  {
    company: "Jigsawstack",
    color: "purple",
    offices: [
      { lng: 103.9551557301094, lat: 1.3500767402116745, name: "Jigsawstack HQ", city: "Tampines, Singapore" },
    ],
  },
  {
    company: "Twitter",
    color: "blue",
    logo: "/x_logo.png",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Twitter HQ", city: "San Francisco, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Twitter", city: "New York, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Twitter", city: "London, UK" },
      { lng: 139.6917, lat: 35.6895, name: "Twitter", city: "Tokyo, Japan" },
      { lng: 103.8198, lat: 1.3521, name: "Twitter", city: "Singapore" },
      { lng: 151.2093, lat: -33.8688, name: "Twitter", city: "Sydney, Australia" },
    ],
  },
  {
    company: "Tesla",
    color: "red",
    logo: "/tesla_logo.jpg",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Tesla HQ", city: "Palo Alto, USA" },
      { lng: -118.2437, lat: 34.0522, name: "Tesla", city: "Los Angeles, USA" },
      { lng: -96.7970, lat: 32.7767, name: "Tesla", city: "Austin, USA" },
      { lng: -122.0841, lat: 37.4220, name: "Tesla", city: "Fremont, USA" },
      { lng: 121.4737, lat: 31.2304, name: "Tesla", city: "Shanghai, China" },
      { lng: 13.4050, lat: 52.5200, name: "Tesla", city: "Berlin, Germany" },
      { lng: -46.6333, lat: -23.5505, name: "Tesla", city: "São Paulo, Brazil" },
    ],
  },
  {
    company: "SpaceX",
    color: "orange",
    logo: "/SpaceX-Logo.png",
    offices: [
      { lng: -118.2437, lat: 34.0522, name: "SpaceX HQ", city: "Hawthorne, USA" },
      { lng: -80.6200, lat: 28.5721, name: "SpaceX", city: "Cape Canaveral, USA" },
      { lng: -95.3698, lat: 29.7604, name: "SpaceX", city: "Boca Chica, USA" },
      { lng: -122.4194, lat: 37.7749, name: "SpaceX", city: "San Francisco, USA" },
    ],
  },
  {
    company: "Discord",
    color: "indigo",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Discord HQ", city: "San Francisco, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Discord", city: "New York, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Discord", city: "London, UK" },
      { lng: 139.6917, lat: 35.6895, name: "Discord", city: "Tokyo, Japan" },
    ],
  },
  {
    company: "Spotify",
    color: "green",
    logo: "/Spotify_logo.png",
    offices: [
      { lng: -74.0060, lat: 40.7128, name: "Spotify HQ", city: "New York, USA" },
      { lng: -122.4194, lat: 37.7749, name: "Spotify", city: "San Francisco, USA" },
      { lng: 18.0686, lat: 59.3293, name: "Spotify HQ", city: "Stockholm, Sweden" },
      { lng: -0.1276, lat: 51.5074, name: "Spotify", city: "London, UK" },
      { lng: 2.3522, lat: 48.8566, name: "Spotify", city: "Paris, France" },
      { lng: 13.4050, lat: 52.5200, name: "Spotify", city: "Berlin, Germany" },
      { lng: 139.6917, lat: 35.6895, name: "Spotify", city: "Tokyo, Japan" },
      { lng: 151.2093, lat: -33.8688, name: "Spotify", city: "Sydney, Australia" },
      { lng: -46.6333, lat: -23.5505, name: "Spotify", city: "São Paulo, Brazil" },
    ],
  },
];

