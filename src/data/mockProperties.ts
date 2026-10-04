export interface PropertyDataObj {
  id: number;
  title: string;
  tag: "For Sale" | "For Rent";
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  garage: number;
  description: string;
  image: string;
  gallery: string[];
  keyFeatures: string[];
}

export const properties: PropertyDataObj[] = [
  {
    id: 1,
    title: "Modern Family Villa",
    tag: "For Sale",
    price: 450000,
    location: "Jubilee Hills, Hyderabad",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2500,
    garage: 2,
    description: "A stunning modern family house featuring open-concept architecture, floor-to-ceiling glass windows, a landscaped private garden, and high-end smart home automation.",
    image: "/images/properties/property1.jpg",
    gallery: [
      "/images/properties/property1.jpg",
      "/images/properties/property1-2.jpg",
      "/images/properties/property1-3.jpg",
      "/images/properties/property1-4.jpg"
    ],
    keyFeatures: [
      "Smart Home Automation",
      "Private Swimming Pool",
      "Landscaped Garden",
      "Modular Italian Kitchen",
      "24/7 Gated Security",
      "Solar Power Backup"
    ]
  },
  {
    id: 2,
    title: "Luxury Beachfront Apartment",
    tag: "For Rent",
    price: 3500,
    location: "Marine Drive, Mumbai",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1850,
    garage: 1,
    description: "Spacious sea-facing high-rise apartment offering panoramic ocean views, private balcony access, designer interiors, and premium resort-style amenities.",
    image: "/images/properties/property2.jpg",
    gallery: [
      "/images/properties/property2.jpg",
      "/images/properties/property2-2.jpg",
      "/images/properties/property2-3.jpg",
      "/images/properties/property2-4.jpg"
    ],
    keyFeatures: [
      "Uninterrupted Sea View",
      "Rooftop Infinity Pool",
      "Fully Equipped Gym",
      "Central Air Conditioning",
      "Covered Reserved Parking",
      "Private Balcony Access"
    ]
  },
  {
    id: 3,
    title: "Contemporary Hillside Residence",
    tag: "For Sale",
    price: 620000,
    location: "Banjara Hills, Hyderabad",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 3800,
    garage: 3,
    description: "An ultra-luxurious hillside villa featuring multi-level terraced living, custom wooden finishings, an indoor home theater, and an expansive infinity pool.",
    image: "/images/properties/property3.jpg",
    gallery: [
      "/images/properties/property3.jpg",
      "/images/properties/property3-2.jpg",
      "/images/properties/property3-3.jpg",
      "/images/properties/property3-4.jpg"
    ],
    keyFeatures: [
      "Private Home Theater",
      "3-Car Covered Garage",
      "Personal Elevator",
      "Wine Cellar & Bar",
      "Outdoor Fireplace Lounge",
      "High-Tech Security System"
    ]
  },
  {
    id: 4,
    title: "Urban Executive Penthouse",
    tag: "For Rent",
    price: 4800,
    location: "Gachibowli, Hyderabad",
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2200,
    garage: 2,
    description: "Sleek top-floor penthouse situated in the heart of the financial district, offering breathtaking skyline vistas, private jacuzzi, and opulent furnishings.",
    image: "/images/properties/property4.jpg",
    gallery: [
      "/images/properties/property4.jpg",
      "/images/properties/property4-2.jpg",
      "/images/properties/property4-3.jpg",
      "/images/properties/property4-4.jpg"
    ],
    keyFeatures: [
      "Skyline Panoramic View",
      "Private Terrace Jacuzzi",
      "High-Speed Fiber Internet",
      "Concierge & Valet Service",
      "Hardwood Flooring",
      "Walk-in Closet Outfits"
    ]
  },
  {
    id: 5,
    title: "Minimalist Suburban Estate",
    tag: "For Sale",
    price: 380000,
    location: "Whitefield, Bengaluru",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2100,
    garage: 2,
    description: "Charming minimalist eco-house nestled in a peaceful gated suburban community, featuring energy-efficient design, courtyard greenery, and sunlit spaces.",
    image: "/images/properties/property5.jpg",
    gallery: [
      "/images/properties/property5.jpg",
      "/images/properties/property5-2.jpg",
      "/images/properties/property5-3.jpg",
      "/images/properties/property5-4.jpg"
    ],
    keyFeatures: [
      "Eco-Friendly Construction",
      "Internal Courtyard Garden",
      "Rainwater Harvesting System",
      "EV Charging Station",
      "Quiet Gated Neighborhood",
      "Spacious Attic Storage"
    ]
  },
  {
    id: 6,
    title: "Serene Lakeview Townhouse",
    tag: "For Rent",
    price: 2800,
    location: "Koramangala, Bengaluru",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    garage: 1,
    description: "Cozy multi-story townhouse overlooking a tranquil lake park, complete with rustic brick aesthetics, private garden patio, and pet-friendly spaces.",
    image: "/images/properties/property6.jpg",
    gallery: [
      "/images/properties/property6.jpg",
      "/images/properties/property6-2.jpg",
      "/images/properties/property6-3.jpg",
      "/images/properties/property6-4.jpg"
    ],
    keyFeatures: [
      "Lakeside Park Proximity",
      "Private Garden Patio",
      "Pet Friendly Layout",
      "Exposed Brick Interior",
      "Low Maintenance Living",
      "Walkable Shopping District"
    ]
  }
];