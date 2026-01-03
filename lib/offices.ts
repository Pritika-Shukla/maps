type Office = { lng: number; lat: number; name: string; city: string; };
type CompanyOffices = { company: string; color: string; logo?: string; offices: Office[]; };

export const companiesData: CompanyOffices[] = [
  {
    company: "Google",
    color: "blue",
    logo: "/google-logo.webp",
    offices: [
      // 🇺🇸 USA
      { lng: -122.0849, lat: 37.4220, name: "Google HQ", city: "Mountain View, USA" },
      { lng: -122.3945, lat: 37.7749, name: "Google", city: "San Francisco, USA" },
      { lng: -118.2437, lat: 34.0522, name: "Google", city: "Los Angeles, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Google", city: "New York, USA" },
      { lng: -122.3321, lat: 47.6062, name: "Google", city: "Seattle, USA" },
      { lng: -87.6298, lat: 41.8781, name: "Google", city: "Chicago, USA" },
      { lng: -97.7431, lat: 30.2672, name: "Google", city: "Austin, USA" },
      { lng: -71.0596, lat: 42.3601, name: "Google", city: "Boston, USA" },
      // 🇨🇦 Canada
      { lng: -79.3832, lat: 43.6532, name: "Google", city: "Toronto, Canada" },
      { lng: -123.1207, lat: 49.2827, name: "Google", city: "Vancouver, Canada" },
      // 🇪🇺 Europe
      { lng: -6.2603, lat: 53.3498, name: "Google EMEA HQ", city: "Dublin, Ireland" },
      { lng: -0.1276, lat: 51.5074, name: "Google", city: "London, UK" },
      { lng: 8.5417, lat: 47.3769, name: "Google", city: "Zurich, Switzerland" },
      { lng: 13.4050, lat: 52.5200, name: "Google", city: "Berlin, Germany" },
      { lng: 2.3522, lat: 48.8566, name: "Google", city: "Paris, France" },
      { lng: 4.9041, lat: 52.3676, name: "Google", city: "Amsterdam, Netherlands" },
      // 🇮🇳 India
      { lng: 77.5946, lat: 12.9716, name: "Google", city: "Bengaluru, India" },
      { lng: 78.4867, lat: 17.3850, name: "Google", city: "Hyderabad, India" },
      { lng: 72.8777, lat: 19.0760, name: "Google", city: "Mumbai, India" },
      { lng: 77.1025, lat: 28.7041, name: "Google", city: "Gurugram, India" },
      // 🌏 Asia
      { lng: 139.7282, lat: 35.6762, name: "Google", city: "Tokyo, Japan" },
      { lng: 126.9780, lat: 37.5665, name: "Google", city: "Seoul, South Korea" },
      { lng: 121.5654, lat: 25.0330, name: "Google", city: "Taipei, Taiwan" },
      { lng: 114.1694, lat: 22.3193, name: "Google", city: "Hong Kong" },
      { lng: 103.8198, lat: 1.3521, name: "Google", city: "Singapore" },
      // 🇦🇺 Australia
      { lng: 151.2093, lat: -33.8688, name: "Google", city: "Sydney, Australia" },
      { lng: 144.9631, lat: -37.8136, name: "Google", city: "Melbourne, Australia" },
      // 🌍 Middle East & Africa
      { lng: 55.2708, lat: 25.2048, name: "Google", city: "Dubai, UAE" },
      { lng: 34.7818, lat: 32.0853, name: "Google", city: "Tel Aviv, Israel" },
      { lng: 28.0473, lat: -26.2041, name: "Google", city: "Johannesburg, South Africa" },
      // 🇧🇷 Latin America
      { lng: -46.6333, lat: -23.5505, name: "Google", city: "São Paulo, Brazil" },
      { lng: -99.1332, lat: 19.4326, name: "Google", city: "Mexico City, Mexico" },
    ],
  },
  {
    company: "Amazon",
    color: "orange",
    logo: "/Amazon_icon.png",
    offices: [
      // 🇺🇸 USA
      { lng: -122.3394, lat: 47.6205, name: "Amazon HQ", city: "Seattle, USA" },
      { lng: -77.0369, lat: 38.9072, name: "Amazon HQ2", city: "Arlington, Virginia, USA" },
      { lng: -122.4194, lat: 37.7749, name: "Amazon", city: "San Francisco, USA" },
      { lng: -118.2437, lat: 34.0522, name: "Amazon", city: "Los Angeles, USA" },
      { lng: -74.0060, lat: 40.7128, name: "Amazon", city: "New York, USA" },
      { lng: -121.8863, lat: 37.3382, name: "Amazon", city: "San Jose, USA" },
      { lng: -95.3698, lat: 29.7604, name: "Amazon", city: "Houston, USA" },
      { lng: -96.7970, lat: 32.7767, name: "Amazon", city: "Dallas, USA" },
      { lng: -84.3880, lat: 33.7490, name: "Amazon", city: "Atlanta, USA" },
      // 🇨🇦 Canada
      { lng: -79.3832, lat: 43.6532, name: "Amazon", city: "Toronto, Canada" },
      { lng: -123.1207, lat: 49.2827, name: "Amazon", city: "Vancouver, Canada" },
      // 🇪🇺 Europe
      { lng: -6.2603, lat: 53.3498, name: "Amazon EU HQ", city: "Dublin, Ireland" },
      { lng: -0.1276, lat: 51.5074, name: "Amazon", city: "London, UK" },
      { lng: 13.4050, lat: 52.5200, name: "Amazon", city: "Berlin, Germany" },
      { lng: 2.3522, lat: 48.8566, name: "Amazon", city: "Paris, France" },
      { lng: 12.4964, lat: 41.9028, name: "Amazon", city: "Rome, Italy" },
      { lng: 18.0686, lat: 59.3293, name: "Amazon", city: "Stockholm, Sweden" },
      // 🇮🇳 India
      { lng: 77.5946, lat: 12.9716, name: "Amazon", city: "Bengaluru, India" },
      { lng: 78.4867, lat: 17.3850, name: "Amazon", city: "Hyderabad, India" },
      { lng: 77.1025, lat: 28.7041, name: "Amazon", city: "Gurugram, India" },
      { lng: 72.8777, lat: 19.0760, name: "Amazon", city: "Mumbai, India" },
      { lng: 73.8567, lat: 18.5204, name: "Amazon", city: "Pune, India" },
      { lng: 80.2707, lat: 13.0827, name: "Amazon", city: "Chennai, India" },
      // 🌏 Asia
      { lng: 139.7282, lat: 35.6762, name: "Amazon", city: "Tokyo, Japan" },
      { lng: 116.4074, lat: 39.9042, name: "Amazon", city: "Beijing, China" },
      { lng: 121.4737, lat: 31.2304, name: "Amazon", city: "Shanghai, China" },
      { lng: 103.8198, lat: 1.3521, name: "Amazon", city: "Singapore" },
      { lng: 114.1694, lat: 22.3193, name: "Amazon", city: "Hong Kong" },
      // 🇦🇺 Australia
      { lng: 151.2093, lat: -33.8688, name: "Amazon", city: "Sydney, Australia" },
      { lng: 144.9631, lat: -37.8136, name: "Amazon", city: "Melbourne, Australia" },
      // 🌍 Middle East & Africa
      { lng: 55.2708, lat: 25.2048, name: "Amazon", city: "Dubai, UAE" },
      { lng: 24.7136, lat: -33.9249, name: "Amazon", city: "Cape Town, South Africa" },
      // 🇧🇷 Latin America
      { lng: -46.6333, lat: -23.5505, name: "Amazon", city: "São Paulo, Brazil" },
      { lng: -99.1332, lat: 19.4326, name: "Amazon", city: "Mexico City, Mexico" },
    ],
  },
  {
    company: "Vercel",
    color: "black",
    logo: "/vercel.svg",
    offices: [
      { lng: -74.0060, lat: 40.7128, name: "Vercel HQ", city: "New York, USA" },
      { lng: -122.4194, lat: 37.7749, name: "Vercel", city: "San Francisco, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Vercel", city: "London, UK" },
      { lng: 139.7282, lat: 35.6762, name: "Vercel", city: "Tokyo, Japan" },
    ],
  },
  {
    company: "Mintlify",
    color: "green",
    logo: "/mintlify_logo.svg",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Mintlify HQ", city: "San Francisco, USA" },
    ],
  },
  {
    company: "Jigsawstack",
    color: "purple",
    logo: "/jigsaw.png",
    offices: [
      { lng: 103.8198, lat: 1.3521, name: "Jigsawstack HQ", city: "Singapore" },
    ],
  },
  {
    company: "Twitter (X)",
    color: "blue",
    logo: "/x_logo.png",
    offices: [
      // 🇺🇸 USA - Texas (Primary HQ)
      { lng: -97.2109, lat: 30.0046, name: "X HQ", city: "Bastrop, Texas, USA" },
      { lng: -97.7431, lat: 30.2672, name: "X", city: "Austin, USA" },
      { lng: -121.8863, lat: 37.3382, name: "X", city: "San Jose, USA" },
      { lng: -122.1637, lat: 37.4419, name: "X", city: "Palo Alto, USA" },
      // 🇺🇸 USA - Other Locations
      { lng: -122.4194, lat: 37.7749, name: "X", city: "San Francisco, USA" },
      { lng: -118.2437, lat: 34.0522, name: "X", city: "Los Angeles, USA" },
      { lng: -74.0060, lat: 40.7128, name: "X", city: "New York, USA" },
      { lng: -122.3321, lat: 47.6062, name: "X", city: "Seattle, USA" },
      { lng: -87.6298, lat: 41.8781, name: "X", city: "Chicago, USA" },
      { lng: -84.3880, lat: 33.7490, name: "X", city: "Atlanta, USA" },
      { lng: -80.1918, lat: 25.7617, name: "X", city: "Miami, USA" },
      { lng: -123.2724, lat: 45.5152, name: "X", city: "Hillsboro, USA" },
      // 🇪🇺 Europe
      { lng: -0.1276, lat: 51.5074, name: "X", city: "London, UK" },
      // 🌏 Asia
      { lng: 139.7282, lat: 35.6762, name: "X", city: "Tokyo, Japan" },
    ],
  },
  {
    company: "Tesla",
    color: "red",
    logo: "/tesla_logo.jpg",
    offices: [
      { lng: -97.7431, lat: 30.2672, name: "Tesla HQ", city: "Austin, Texas, USA" },
      { lng: -121.8930, lat: 37.3349, name: "Tesla Factory", city: "Fremont, California, USA" },
      { lng: 121.4737, lat: 31.2304, name: "Gigafactory", city: "Shanghai, China" },
      { lng: 13.6050, lat: 52.3676, name: "Gigafactory", city: "Berlin, Germany" },
      { lng: -100.3161, lat: 25.6866, name: "Gigafactory", city: "Monterrey, Mexico" },
    ],
  },
  {
    company: "SpaceX",
    color: "orange",
    logo: "/space-x.png",
    offices: [
      { lng: -118.3520, lat: 33.9164, name: "SpaceX HQ", city: "Hawthorne, California, USA" },
      { lng: -97.1566, lat: 25.9971, name: "Starbase", city: "Boca Chica, Texas, USA" },
      { lng: -80.6043, lat: 28.6084, name: "Launch Site", city: "Cape Canaveral, Florida, USA" },
    ],
  },
  {
    company: "Discord",
    color: "indigo",
    logo: "/discord_logo.svg",
    offices: [
      { lng: -122.4194, lat: 37.7749, name: "Discord HQ", city: "San Francisco, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Discord", city: "London, UK" },
    ],
  },
  {
    company: "Spotify",
    color: "green",
    logo: "/Spotify_logo.png",
    offices: [
      { lng: 18.0686, lat: 59.3293, name: "Spotify HQ", city: "Stockholm, Sweden" },
      { lng: -74.0060, lat: 40.7128, name: "Spotify", city: "New York, USA" },
      { lng: -122.4194, lat: 37.7749, name: "Spotify", city: "San Francisco, USA" },
      { lng: -0.1276, lat: 51.5074, name: "Spotify", city: "London, UK" },
      { lng: 13.4050, lat: 52.5200, name: "Spotify", city: "Berlin, Germany" },
      { lng: 139.7282, lat: 35.6762, name: "Spotify", city: "Tokyo, Japan" },
    ],
  },
];