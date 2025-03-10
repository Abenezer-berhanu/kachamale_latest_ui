import {
  Armchair,
  Calendar,
  Car,
  HandPlatter,
  LifeBuoy,
  ShieldMinus,
} from "lucide-react";

export const carouselCar = [
  {
    title: "You can buy Sleek & Innovative Audi Car",
    description:
      "German engineering, known for luxury and advanced technology.",
    image: "/carousel/audi.png",
  },
  {
    title: "You can buy Performance Icon Porsche",
    description:
      "Synonymous with high-performance sports cars and distinctive design.",
    image: "/carousel/porshce.png",
  },
  {
    title: "You can buy Opulent Elegance Roll royce",
    description: "The pinnacle of luxury, offering bespoke craftsmanship.",
    image: "/carousel/rollroice.png",
  },
  {
    title: "You can buy Dynamic Precision BMW",
    description:
      "Renowned for sporty performance and executive class vehicles.",
    image: "/carousel/bmw.png",
  },
  {
    title: "You can buy Exotic Mastery Hyundai Car",
    description:
      "Italian boutique manufacturer of hypercars known for exclusivity.",
    image: "/carousel/hyundai.png",
  },
  {
    title: "You can buy Electric Revolution Car",
    description: "Leading the charge in electric mobility and innovation.",
    image: "/carousel/tesla.png",
  },
];

export const mockCar = [
  {
    id: 1,
    category: "Car",
    slug: "hyundai-avante-blue-2021-1",
    sellerCity: "Addis Ababa",
    sellerStreet: "Bole Medhanialem",
    images: [
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680103_MTYwMC04MjMtMTlmNGUzMmEwYy0x_xpvjq0.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/bmw-m3-gtr-street-si_chwvv8.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680105_MTYwMC05MzUtNzVkOGFkYzkwMS0x_bujywd.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680100_MTYwMC0xMDU5LTliZmMzYWYyNDUtMQ_kl4okl.webp",
    ],
    make: "Hyundai",
    model: "Avante",
    yearOfManufacture: 2021,
    color: "Blue",
    interiorColor: "Black",
    condition: "Foreign Used",
    transmission: "Automatic",
    keyFeatures: [
      "Radio",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Heated Seats",
      "Reverse Parking Sensors",
      "Sunroof",
    ],
    isCarRegistered: true,
    body: "Sedan",
    fuel: "Petrol",
    mileage: 38000,
    seats: 5,
    numberOfCylinders: 4,
    engineSize: "1.6L",
    horsePower: 150,
    description:
      "A reliable and well-maintained foreign used Hyundai Avante. Excellent fuel efficiency and a smooth driving experience. The car is in pristine condition with no accidents or damages. It’s perfect for both city commuting and long drives.",
    price: 18500,
    negotiationAvailable: true,
    sellerId: 1,
    phoneNumber: "+251919298886",
    payment: "Silver",
  },
  {
    id: 2,
    category: "Car",
    slug: "toyota-corolla-white-2018-2",
    sellerCity: "Addis Ababa",
    sellerStreet: "Lideta, Near Lion Hotel",
    images: [
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680103_MTYwMC04MjMtMTlmNGUzMmEwYy0x_xpvjq0.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/bmw-m3-gtr-street-si_chwvv8.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680105_MTYwMC05MzUtNzVkOGFkYzkwMS0x_bujywd.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680100_MTYwMC0xMDU5LTliZmMzYWYyNDUtMQ_kl4okl.webp",
    ],
    make: "Toyota",
    model: "Corolla",
    yearOfManufacture: 2018,
    color: "White",
    interiorColor: "Gray",
    condition: "Local Used",
    transmission: "Manual",
    mileage: 38000,
    keyFeatures: [
      "Bluetooth Connectivity",
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Cruise Control",
    ],
    isCarRegistered: true,
    body: "Sedan",
    fuel: "Petrol",
    seats: 5,
    numberOfCylinders: 4,
    engineSize: "1.8L",
    horsePower: 140,
    description:
      "A well-maintained Toyota Corolla, locally used, with excellent mileage and performance. Ideal for family use and daily commuting in Addis Ababa.",
    price: 12500,
    negotiationAvailable: false,
    sellerId: 1,
    phoneNumber: "+251919298886",
    payment: "Gold",
  },
  {
    id: 3,
    category: "Car",
    slug: "Mercedes-Benz-C-Class-silver-2020-3",
    sellerCity: "Addis Ababa",
    sellerStreet: "Kazanchis, Near the African Union",
    images: [
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680103_MTYwMC04MjMtMTlmNGUzMmEwYy0x_xpvjq0.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/bmw-m3-gtr-street-si_chwvv8.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680105_MTYwMC05MzUtNzVkOGFkYzkwMS0x_bujywd.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680100_MTYwMC0xMDU5LTliZmMzYWYyNDUtMQ_kl4okl.webp",
    ],
    make: "Mercedes-Benz",
    model: "C-Class",
    yearOfManufacture: 2020,
    mileage: 38000,
    color: "Silver",
    interiorColor: "Beige",
    condition: "Foreign Used",
    transmission: "Automatic",
    keyFeatures: [
      "Leather Seats",
      "Navigation System",
      "Rearview Camera",
      "Bluetooth Connectivity",
      "Sunroof",
    ],
    isCarRegistered: true,
    body: "Sedan",
    fuel: "Petrol",
    seats: 5,
    numberOfCylinders: 6,
    engineSize: "2.0L",
    horsePower: 200,
    description:
      "A luxurious Mercedes-Benz C-Class, foreign used, offering both comfort and performance. It’s a great choice for anyone looking for a high-end ride in excellent condition.",
    price: 35000,
    negotiationAvailable: true,
    sellerId: 1,
    phoneNumber: "+251919298886",
    payment: "Platinum",
  },
  {
    id: 4,
    category: "Car",
    slug: "nissan-x-trial-black-2019-4",
    sellerCity: "Addis Ababa",
    sellerStreet: "Megenagna, Near the Police Station",
    images: [
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680103_MTYwMC04MjMtMTlmNGUzMmEwYy0x_xpvjq0.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/bmw-m3-gtr-street-si_chwvv8.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680105_MTYwMC05MzUtNzVkOGFkYzkwMS0x_bujywd.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680100_MTYwMC0xMDU5LTliZmMzYWYyNDUtMQ_kl4okl.webp",
    ],
    make: "Nissan",
    model: "X-Trail",
    yearOfManufacture: 2019,
    mileage: 38000,
    color: "Black",
    interiorColor: "Dark Gray",
    condition: "Foreign Used",
    transmission: "CVT",
    keyFeatures: [
      "4WD",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Heated Seats",
      "Roof Rack",
    ],
    isCarRegistered: true,
    body: "SUV",
    fuel: "Petrol",
    seats: 5,
    numberOfCylinders: 4,
    engineSize: "2.5L",
    horsePower: 180,
    description:
      "A spacious and reliable Nissan X-Trail, perfect for Ethiopian roads. It offers great performance both in the city and off-road. Well maintained and in excellent condition.",
    price: 25000,
    negotiationAvailable: true,
    sellerId: 3,
    phoneNumber: "+251919298886",
    payment: "Silver",
  },
  {
    id: 5,
    slug: "kia-sportage-red-2022-5",
    category: "Car",
    sellerCity: "Addis Ababa",
    sellerStreet: "Bole, Next to the Airport",
    images: [
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680103_MTYwMC04MjMtMTlmNGUzMmEwYy0x_xpvjq0.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/bmw-m3-gtr-street-si_chwvv8.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680105_MTYwMC05MzUtNzVkOGFkYzkwMS0x_bujywd.webp",
      "https://res.cloudinary.com/dg6ck04nm/image/upload/kachamale/5680100_MTYwMC0xMDU5LTliZmMzYWYyNDUtMQ_kl4okl.webp",
    ],
    make: "Kia",
    model: "Sportage",
    yearOfManufacture: 2022,
    mileage: 38000,
    color: "Red",
    interiorColor: "Tan",
    condition: "Brand New",
    transmission: "Automatic",
    keyFeatures: [
      "Heated Seats",
      "Bluetooth Connectivity",
      "Rearview Camera",
      "Touchscreen Display",
      "Alloy Wheels",
    ],
    isCarRegistered: true,
    body: "SUV",
    fuel: "Petrol",
    seats: 5,
    numberOfCylinders: 4,
    engineSize: "2.0L",
    horsePower: 160,
    description:
      "A brand-new Kia Sportage, ideal for family outings and adventurous road trips in Ethiopia. It combines modern design with advanced features for a comfortable ride.",
    price: 30000,
    negotiationAvailable: false,
    sellerId: 1,
    phoneNumber: "+251919298886",
    payment: "Gold",
  },
];

export const users = [
  {
    id: 1,
    profile:
      "https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid",
    fullName: "John Doe",
    email: "john@gmail.com",
    phoneNumber: "+251919298886",
  },
];

export const notifications = [
  {
    name: "John doe",
    description: "Payment received",
    time: "15m ago",
  },
  {
    name: "Mark Smith",
    description: "Good to know you",
    time: "10m ago",
  },
  {
    name: "jeny jorge",
    description: "May i get the image",
    time: "5m ago",
  },
  {
    name: "Lawra swiden",
    description: "when is your flight",
    time: "2m ago",
  },
];

export const carData = [
  {
    make: "Acura",
    models: ["ILX", "MDX", "RDX", "TLX", "NSX", "RLX", "Integra"],
  },
  {
    make: "Alfa Romeo",
    models: ["Giulia", "Stelvio", "4C", "Tonale", "GTV", "8C"],
  },
  {
    make: "Audi",
    models: [
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "Q3",
      "Q5",
      "Q7",
      "Q8",
      "R8",
      "e-tron",
    ],
  },
  {
    make: "BMW",
    models: [
      "3 Series",
      "5 Series",
      "7 Series",
      "X3",
      "X5",
      "X7",
      "M3",
      "M5",
      "Z4",
      "i8",
    ],
  },
  {
    make: "Bentley",
    models: ["Bentayga", "Continental GT", "Flying Spur", "Mulsanne"],
  },
  {
    make: "Buick",
    models: ["Encore", "Enclave", "Envision", "LaCrosse", "Regal", "Cascada"],
  },
  {
    make: "Cadillac",
    models: ["CT4", "CT5", "CT6", "Escalade", "XT4", "XT5", "XT6"],
  },
  {
    make: "Chevrolet",
    models: [
      "Malibu",
      "Equinox",
      "Silverado",
      "Tahoe",
      "Traverse",
      "Camaro",
      "Corvette",
      "Blazer",
    ],
  },
  {
    make: "Chrysler",
    models: ["300", "Pacifica", "Voyager", "Aspen"],
  },
  {
    make: "Dodge",
    models: [
      "Charger",
      "Challenger",
      "Durango",
      "Journey",
      "Ram 1500",
      "Grand Caravan",
    ],
  },
  {
    make: "Fiat",
    models: ["500", "500X", "124 Spider", "500L"],
  },
  {
    make: "Fisker",
    models: ["Ocean", "Karma"],
  },
  {
    make: "Ford",
    models: [
      "Fiesta",
      "Focus",
      "Fusion",
      "Mustang",
      "Explorer",
      "Escape",
      "F-150",
      "Bronco",
      "Ranger",
    ],
  },
  {
    make: "GMC",
    models: [
      "Sierra 1500",
      "Acadia",
      "Terrain",
      "Yukon",
      "Canyon",
      "Hummer EV",
    ],
  },
  {
    make: "Genesis",
    models: ["G70", "G80", "G90", "GV70", "GV80"],
  },
  {
    make: "Honda",
    models: [
      "Civic",
      "Accord",
      "CR-V",
      "Pilot",
      "Odyssey",
      "Ridgeline",
      "HR-V",
      "Passport",
    ],
  },
  {
    make: "Hyundai",
    models: [
      "Elantra",
      "Sonata",
      "Tucson",
      "Santa Fe",
      "Palisade",
      "Kona",
      "Veloster",
      "Ioniq",
    ],
  },
  {
    make: "Infiniti",
    models: ["Q50", "Q60", "QX50", "QX60", "QX80"],
  },
  {
    make: "Jaguar",
    models: ["XE", "XF", "XJ", "E-PACE", "F-PACE", "I-PACE", "F-TYPE"],
  },
  {
    make: "Jeep",
    models: [
      "Wrangler",
      "Cherokee",
      "Grand Cherokee",
      "Compass",
      "Renegade",
      "Gladiator",
    ],
  },
  {
    make: "Kia",
    models: [
      "Optima",
      "Sorento",
      "Sportage",
      "Telluride",
      "Soul",
      "Stinger",
      "Seltos",
      "Niro",
    ],
  },
  {
    make: "Land Rover",
    models: ["Range Rover", "Defender", "Discovery", "Evoque", "Velar"],
  },
  {
    make: "Lexus",
    models: ["IS", "ES", "GS", "LS", "NX", "RX", "GX", "LX", "RC"],
  },
  {
    make: "Lincoln",
    models: ["MKZ", "Nautilus", "Corsair", "Aviator", "Navigator"],
  },
  {
    make: "Lucid",
    models: ["Air", "Gravity"],
  },
  {
    make: "Maserati",
    models: ["Ghibli", "Levante", "Quattroporte", "GranTurismo", "MC20"],
  },
  {
    make: "Mazda",
    models: ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"],
  },
  {
    make: "Mercedes-Benz",
    models: [
      "A-Class",
      "C-Class",
      "E-Class",
      "S-Class",
      "GLC",
      "GLE",
      "GLS",
      "AMG GT",
    ],
  },
  {
    make: "Mercury",
    models: ["Mariner", "Milan", "Mountaineer"],
  },
  {
    make: "Mini",
    models: ["Cooper", "Countryman", "Clubman"],
  },
  {
    make: "Mitsubishi",
    models: ["Outlander", "Eclipse Cross", "Mirage", "ASX", "Lancer"],
  },
  {
    make: "Nissan",
    models: [
      "Altima",
      "Maxima",
      "Sentra",
      "Rogue",
      "Murano",
      "Pathfinder",
      "370Z",
      "Titan",
    ],
  },
  {
    make: "Polestar",
    models: ["Polestar 1", "Polestar 2", "Polestar 3"],
  },
  {
    make: "Pontiac",
    models: ["G6", "G8", "Vibe", "Solstice", "Firebird"],
  },
  {
    make: "Porsche",
    models: ["911", "Cayenne", "Macan", "Panamera", "Taycan", "718 Boxster"],
  },
  {
    make: "Ram",
    models: ["1500", "2500", "3500", "ProMaster"],
  },
  {
    make: "Rivian",
    models: ["R1T", "R1S"],
  },
  {
    make: "Saab",
    models: ["9-3", "9-5", "9-7X", "900"],
  },
  {
    make: "Saturn",
    models: ["Ion", "Vue", "Aura", "Outlook"],
  },
  {
    make: "Scion",
    models: ["FR-S", "iQ", "tC", "xB", "xD"],
  },
  {
    make: "Scout",
    models: ["Scout 800", "Scout II"],
  },
  {
    make: "Smart",
    models: ["Fortwo", "Forfour"],
  },
  {
    make: "Subaru",
    models: ["Impreza", "Outback", "Forester", "Ascent", "WRX", "BRZ"],
  },
  {
    make: "Suzuki",
    models: ["Swift", "Vitara", "SX4", "Jimny"],
  },
  {
    make: "Tesla",
    models: ["Model S", "Model 3", "Model X", "Model Y", "Roadster"],
  },
  {
    make: "Toyota",
    models: [
      "Camry",
      "Corolla",
      "RAV4",
      "Highlander",
      "Tacoma",
      "Tundra",
      "Prius",
    ],
  },
  {
    make: "VinFast",
    models: ["VF8", "VF9"],
  },
  {
    make: "Volkswagen",
    models: ["Jetta", "Passat", "Golf", "Tiguan", "Atlas", "ID.4"],
  },
  {
    make: "Volvo",
    models: ["XC40", "XC60", "XC90", "S60", "V60", "S90"],
  },
];

export const transmissions = ["automatic", "manual", "AMT", "CVT"];

export const keyFeatures = [
  { label: "Air Conditioning", value: "Air Conditioning" },
  { label: "Dual-Zone Climate Control", value: "Dual-Zone Climate Control" },
  { label: "Heated Seats", value: "Heated Seats" },
  { label: "Ventilated Seats", value: "Ventilated Seats" },
  { label: "Power-Adjustable Seats", value: "Power-Adjustable Seats" },
  { label: "Memory Seats", value: "Memory Seats" },
  { label: "Leather Upholstery", value: "Leather Upholstery" },
  { label: "Massage Seats", value: "Massage Seats" },
  { label: "Keyless Entry and Start", value: "Keyless Entry and Start" },
  { label: "Power Windows and Mirrors", value: "Power Windows and Mirrors" },
  { label: "Rear Window Sunshade", value: "Rear Window Sunshade" },
  { label: "Radio", value: "Radio" },
  { label: "Satellite Radio", value: "Satellite Radio" },
  { label: "Bluetooth Connectivity", value: "Bluetooth Connectivity" },
  { label: "Apple CarPlay", value: "Apple CarPlay" },
  { label: "Android Auto", value: "Android Auto" },
  { label: "Touchscreen Display", value: "Touchscreen Display" },
  { label: "Voice Recognition", value: "Voice Recognition" },
  { label: "Navigation System", value: "Navigation System" },
  { label: "USB Ports", value: "USB Ports" },
  { label: "Auxiliary Inputs", value: "Auxiliary Inputs" },
  { label: "Wireless Charging Pad", value: "Wireless Charging Pad" },
  { label: "Premium Sound System", value: "Premium Sound System" },
  { label: "Reverse Parking Sensors", value: "Reverse Parking Sensors" },
  { label: "Rearview Camera", value: "Rearview Camera" },
  { label: "360-Degree Camera", value: "360-Degree Camera" },
  { label: "Adaptive Cruise Control", value: "Adaptive Cruise Control" },
  { label: "Blind Spot Monitoring", value: "Blind Spot Monitoring" },
  { label: "Lane Keep Assist", value: "Lane Keep Assist" },
  {
    label: "Automatic Emergency Braking",
    value: "Automatic Emergency Braking",
  },
  { label: "Collision Warning System", value: "Collision Warning System" },
  { label: "Cross Traffic Alert", value: "Cross Traffic Alert" },
  { label: "Anti-Theft Alarm System", value: "Anti-Theft Alarm System" },
  { label: "All-Wheel Drive (AWD)", value: "All-Wheel Drive (AWD)" },
  { label: "Four-Wheel Drive (4WD)", value: "Four-Wheel Drive (4WD)" },
  { label: "Adaptive Suspension", value: "Adaptive Suspension" },
  { label: "Limited-Slip Differential", value: "Limited-Slip Differential" },
  { label: "Drive Mode Selector", value: "Drive Mode Selector" },
  { label: "Sport Mode", value: "Sport Mode" },
  { label: "Electric Parking Brake", value: "Electric Parking Brake" },
  { label: "Sunroof", value: "Sunroof" },
  { label: "Moonroof", value: "Moonroof" },
  { label: "Panoramic Roof", value: "Panoramic Roof" },
  { label: "LED Headlights", value: "LED Headlights" },
  { label: "LED Taillights", value: "LED Taillights" },
  { label: "Fog Lights", value: "Fog Lights" },
  { label: "Automatic Headlights", value: "Automatic Headlights" },
  { label: "Roof Rails", value: "Roof Rails" },
  { label: "Alloy Wheels", value: "Alloy Wheels" },
  { label: "Power Tailgate", value: "Power Tailgate" },
  { label: "Ambient Lighting", value: "Ambient Lighting" },
  { label: "Folding Rear Seats", value: "Folding Rear Seats" },
  { label: "Split Rear Seats", value: "Split Rear Seats" },
  { label: "Cargo Cover", value: "Cargo Cover" },
  { label: "Adjustable Steering Column", value: "Adjustable Steering Column" },
  {
    label: "Steering Wheel-Mounted Controls",
    value: "Steering Wheel-Mounted Controls",
  },
  { label: "Lane Departure Warning", value: "Lane Departure Warning" },
  { label: "Traffic Sign Recognition", value: "Traffic Sign Recognition" },
  { label: "Adaptive Headlights", value: "Adaptive Headlights" },
  { label: "Automatic Parking Assist", value: "Automatic Parking Assist" },
  {
    label: "Driver Attention Monitoring",
    value: "Driver Attention Monitoring",
  },
  { label: "Hybrid Powertrain", value: "Hybrid Powertrain" },
  { label: "Electric Powertrain", value: "Electric Powertrain" },
  { label: "Regenerative Braking", value: "Regenerative Braking" },
  { label: "Eco Mode", value: "Eco Mode" },
  { label: "Start-Stop Technology", value: "Start-Stop Technology" },
  { label: "Heated Steering Wheel", value: "Heated Steering Wheel" },
  { label: "Rain-Sensing Wipers", value: "Rain-Sensing Wipers" },
  { label: "Remote Start", value: "Remote Start" },
  { label: "Run-Flat Tires", value: "Run-Flat Tires" },
  { label: "Spare Tire", value: "Spare Tire" },
  { label: "Heads-Up Display (HUD)", value: "Heads-Up Display (HUD)" },
];

export const carBodyTypes = [
  { label: "Sedan", value: "Sedan" },
  { label: "Coupe", value: "Coupe" },
  { label: "Hatchback", value: "Hatchback" },
  { label: "SUV", value: "SUV" },
  { label: "Crossover", value: "Crossover" },
  { label: "Convertible", value: "Convertible" },
  { label: "Wagon", value: "Wagon" },
  { label: "Pickup Truck", value: "Pickup Truck" },
  { label: "Van", value: "Van" },
  { label: "Minivan", value: "Minivan" },
  { label: "Roadster", value: "Roadster" },
  { label: "Sports Car", value: "Sports Car" },
  { label: "Luxury Car", value: "Luxury Car" },
  { label: "Compact Car", value: "Compact Car" },
  { label: "Subcompact Car", value: "Subcompact Car" },
  { label: "Microcar", value: "Microcar" },
  { label: "Supercar", value: "Supercar" },
  { label: "Hypercar", value: "Hypercar" },
  { label: "Muscle Car", value: "Muscle Car" },
  { label: "Off-Road Vehicle", value: "Off-Road Vehicle" },
  { label: "Electric Vehicle (EV)", value: "Electric Vehicle (EV)" },
  { label: "Hybrid Vehicle", value: "Hybrid Vehicle" },
  { label: "Station Wagon", value: "Station Wagon" },
  { label: "Panel Van", value: "Panel Van" },
  { label: "Camper Van", value: "Camper Van" },
  { label: "City Car", value: "City Car" },
  { label: "Utility Vehicle", value: "Utility Vehicle" },
  { label: "Crew Cab", value: "Crew Cab" },
  { label: "Extended Cab", value: "Extended Cab" },
  { label: "Chassis Cab", value: "Chassis Cab" },
  { label: "Targa", value: "Targa" },
  { label: "Fastback", value: "Fastback" },
  { label: "Hardtop", value: "Hardtop" },
  { label: "Liftback", value: "Liftback" },
  { label: "Sportback", value: "Sportback" },
];

export const fuelTypes = [
  { label: "Petrol", value: "Petrol" },
  { label: "Diesel", value: "Diesel" },
  { label: "Electric", value: "Electric" },
  { label: "Hybrid (Petrol/Electric)", value: "Hybrid (Petrol/Electric)" },
  { label: "Hybrid (Diesel/Electric)", value: "Hybrid (Diesel/Electric)" },
  { label: "Plug-in Hybrid", value: "Plug-in Hybrid" },
  { label: "CNG (Compressed Natural Gas)", value: "CNG" },
  { label: "LPG (Liquefied Petroleum Gas)", value: "LPG" },
  { label: "Hydrogen Fuel Cell", value: "Hydrogen Fuel Cell" },
  { label: "Ethanol", value: "Ethanol" },
  { label: "Biodiesel", value: "Biodiesel" },
  { label: "Flex Fuel", value: "Flex Fuel" },
];

export const carConditions = ["Brand new", "Foreign used", "Local used"];

// This is sample data.
export const carFilteringData = [
  {
    title: "Body type",
    items: [
      {
        title: "suv",
        icon: Car,
        paramKey: "",
      },
      {
        title: "minivan",
        icon: Car,
        paramKey: "",
      },
      {
        title: "hatchback",
        icon: Car,
        paramKey: "",
      },
      {
        title: "van",
        icon: Car,
        paramKey: "",
      },
      {
        title: "station wagon",
        icon: Car,
        paramKey: "",
      },
      {
        title: "pickup",
        icon: Car,
        paramKey: "",
      },
      {
        title: "panel van",
        icon: Car,
        paramKey: "",
      },
      {
        title: "crossover",
        icon: Car,
        paramKey: "",
      },
      {
        title: "coupe",
        icon: Car,
        paramKey: "",
      },
      {
        title: "covertible",
        icon: Car,
        paramKey: "",
      },
    ],
  },
  {
    title: "Capacity",
    items: [
      {
        title: "2 to 5 Passenger",
        icon: Armchair,
        paramKey: "",
      },
      {
        title: "6+ Passenger",
        icon: Armchair,
        paramKey: "",
      },
    ],
  },
  {
    title: "Year of manufacture",
    items: [
      {
        title: "1990 to 2000",
        icon: Calendar,
        paramKey: "",
      },
      {
        title: "2001 to 2010",
        icon: Calendar,
        paramKey: "",
      },
      {
        title: "2010 to 2020",
        icon: Calendar,
        paramKey: "",
      },
      {
        title: "2020 to now",
        icon: Calendar,
        paramKey: "",
      },
    ],
  },
  {
    title: "Condition",
    items: [
      {
        title: "Brand new",
        icon: HandPlatter,
        paramKey: "",
      },
      {
        title: "Slightly used",
        icon: HandPlatter,
        paramKey: "",
      },
      {
        title: "Used",
        icon: HandPlatter,
        paramKey: "",
      },
      {
        title: "foreign used",
        icon: HandPlatter,
        paramKey: "",
      },
    ],
  },
  {
    title: "Transmission",
    items: [
      {
        title: "automatic",
        icon: LifeBuoy,
        paramKey: "",
      },
      {
        title: "manual",
        icon: LifeBuoy,
        paramKey: "",
      },
    ],
  },
  {
    title: "Fuel",
    items: [
      {
        title: "petrol",
        icon: Car,
        paramKey: "",
      },
      {
        title: "hybird",
        icon: Car,
        paramKey: "",
      },
      {
        title: "electric",
        icon: Car,
        paramKey: "",
      },
      {
        title: "diesel",
        icon: Car,
        paramKey: "",
      },
      {
        title: "CNG",
        icon: Car,
        paramKey: "",
      },
    ],
  },
];

export const carMakeAndModel = [
  {
    title: "Ford", // make
    icon: ShieldMinus,
    paramKey: "make", // query 
    model: [
      "F-150",
      "Mustang",
      "Explorer",
      "Escape",
      "Edge",
      "Bronco",
      "Ranger",
      "Expedition",
    ],
  },
  {
    title: "Chevrolet",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Silverado",
      "Camaro",
      "Tahoe",
      "Suburban",
      "Equinox",
      "Malibu",
      "Blazer",
      "Traverse",
    ],
  },
  {
    title: "Cadillac",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Escalade", "CTS", "XT5", "XT4", "XT6", "CT5", "CT4"],
  },
  {
    title: "Dodge",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan"],
  },
  {
    title: "Jeep",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Wrangler",
      "Grand Cherokee",
      "Cherokee",
      "Compass",
      "Renegade",
      "Gladiator",
    ],
  },
  {
    title: "RAM",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["1500", "2500", "3500", "ProMaster", "Rebel", "TRX"],
  },
  {
    title: "GMC",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Sierra", "Yukon", "Acadia", "Terrain", "Canyon", "Hummer EV"],
  },
  {
    title: "Tesla",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
  },
  {
    title: "Lincoln",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Navigator", "Aviator", "Corsair", "Nautilus"],
  },
  {
    title: "Chrysler",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["300", "Pacifica", "Voyager"],
  },
  {
    title: "Buick",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Enclave", "Encore", "Envision", "Regal"],
  },
  {
    title: "Hennessey",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Venom F5"],
  },
  {
    title: "Rivian",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["R1T", "R1S"],
  },
  {
    title: "Lucid Motors",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Air", "Gravity"],
  },
  {
    title: "Volkswagen",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Golf", "Jetta", "Passat", "Tiguan", "Atlas", "ID.4", "Beetle"],
  },
  {
    title: "BMW",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X7", "i4", "iX"],
  },
  {
    title: "Mercedes-Benz",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "C-Class",
      "E-Class",
      "S-Class",
      "GLC",
      "GLE",
      "GLS",
      "A-Class",
      "EQE",
      "G-Wagon",
    ],
  },
  {
    title: "Audi",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron", "RS5"],
  },
  {
    title: "Porsche",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "911",
      "Cayenne",
      "Macan",
      "Taycan",
      "Panamera",
      "Boxster",
      "Carrera GT",
    ],
  },
  {
    title: "Opel",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Corsa", "Astra", "Insignia", "Mokka", "Grandland"],
  },
  {
    title: "Maybach",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["S-Class Maybach", "Maybach GLS"],
  },
  {
    title: "Smart",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Fortwo", "Forfour"],
  },
  {
    title: "Alpina",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["B3", "B4", "B5", "XB7"],
  },
  {
    title: "Wiesmann",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["MF3", "MF4", "MF5"],
  },
  {
    title: "MAN",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["TGX", "TGS", "TGM", "TGL"],
  },
  {
    title: "Toyota",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Corolla",
      "Camry",
      "RAV4",
      "Highlander",
      "Tacoma",
      "Tundra",
      "Supra",
      "Land Cruiser",
      "Prius",
    ],
  },
  {
    title: "Honda",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Civic",
      "Accord",
      "CR-V",
      "HR-V",
      "Pilot",
      "Ridgeline",
      "Fit",
      "Odyssey",
    ],
  },
  {
    title: "Nissan",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Altima",
      "Sentra",
      "Maxima",
      "Rogue",
      "Murano",
      "Pathfinder",
      "Frontier",
      "Titan",
      "GT-R",
      "370Z",
    ],
  },
  {
    title: "Mazda",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5 Miata", "RX-7", "RX-8"],
  },
  {
    title: "Subaru",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Outback", "Forester", "Impreza", "Legacy", "WRX", "BRZ", "Ascent"],
  },
  {
    title: "Mitsubishi",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Outlander", "Eclipse Cross", "Pajero", "Lancer", "Mirage"],
  },
  {
    title: "Suzuki",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Swift", "Vitara", "Jimny", "Celerio", "Ertiga"],
  },
  {
    title: "Lexus",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["ES", "IS", "RX", "NX", "GX", "LX", "RC", "LC"],
  },
  {
    title: "Infiniti",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Q50", "Q60", "QX50", "QX60", "QX80"],
  },
  {
    title: "Daihatsu",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Terios", "Copen", "Hijet", "Mira", "Move"],
  },
  {
    title: "Isuzu",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["D-Max", "MU-X", "Trooper", "Elf"],
  },
  {
    title: "Hyundai",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Elantra",
      "Sonata",
      "Tucson",
      "Santa Fe",
      "Palisade",
      "Kona",
      "Accent",
    ],
  },
  {
    title: "Kia",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "Sportage",
      "Sorento",
      "Telluride",
      "Forte",
      "Stinger",
      "Rio",
      "Carnival",
      "EV6",
    ],
  },
  {
    title: "Genesis",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["G70", "G80", "G90", "GV70", "GV80"],
  },
  {
    title: "SsangYong (KG Mobility)",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Tivoli", "Rexton", "Korando", "Musso"],
  },
  {
    title: "Rolls-Royce",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Phantom", "Ghost", "Wraith", "Cullinan", "Dawn"],
  },
  {
    title: "Bentley",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne"],
  },
  {
    title: "Aston Martin",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["DB11", "DBS", "Vantage", "Rapide", "Valhalla"],
  },
  {
    title: "Land Rover",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Range Rover", "Defender", "Discovery", "Evoque", "Velar"],
  },
  {
    title: "Jaguar",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["F-Type", "XF", "XE", "E-Pace", "F-Pace", "I-Pace"],
  },
  {
    title: "Mini",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Cooper", "Clubman", "Countryman", "Electric"],
  },
  {
    title: "McLaren",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["720S", "Artura", "GT", "P1", "Senna"],
  },
  {
    title: "Lotus",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Evora", "Exige", "Elise", "Emira", "Eletre"],
  },
  {
    title: "Vauxhall",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Corsa", "Astra", "Insignia", "Mokka"],
  },
  {
    title: "Morgan",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Plus Four", "Plus Six", "3-Wheeler"],
  },
  {
    title: "Ferrari",
    icon: ShieldMinus,
    paramKey: "make",
    model: [
      "488 GTB",
      "F8 Tributo",
      "SF90 Stradale",
      "Roma",
      "812 Superfast",
      "LaFerrari",
    ],
  },
  {
    title: "Lamborghini",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Huracán", "Aventador", "Urus", "Revuelto", "Diablo", "Gallardo"],
  },
  {
    title: "Maserati",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Ghibli", "Levante", "Quattroporte", "GranTurismo", "MC20"],
  },
  {
    title: "Alfa Romeo",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Giulia", "Stelvio", "Tonale", "4C", "Spider"],
  },
  {
    title: "Fiat",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["500", "Panda", "Tipo", "Ducato", "Punto"],
  },
  {
    title: "Lancia",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Ypsilon", "Delta", "Stratos", "Thema"],
  },
  {
    title: "Pagani",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Zonda", "Huayra", "Utopia"],
  },
  {
    title: "Iveco",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Daily", "Eurocargo", "Stralis"],
  },
  {
    title: "Peugeot",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["208", "308", "3008", "5008", "Rifter"],
  },
  {
    title: "Renault",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Clio", "Megane", "Captur", "Kadjar", "Talisman", "Espace"],
  },
  {
    title: "Citroën",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["C3", "C4", "C5 Aircross", "Berlingo", "DS4"],
  },
  {
    title: "DS Automobiles",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["DS3", "DS4", "DS7", "DS9"],
  },
  {
    title: "Bugatti",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Veyron", "Chiron", "Divo", "Bolide"],
  },
  {
    title: "Volvo",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["XC40", "XC60", "XC90", "S60", "S90", "V60"],
  },
  {
    title: "Koenigsegg",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Jesko", "Agera", "Regera", "Gemera"],
  },
  {
    title: "Polestar",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Polestar 1", "Polestar 2", "Polestar 3"],
  },
  {
    title: "Saab",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["9-3", "9-5", "900"],
  },
  {
    title: "SEAT",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Ibiza", "Leon", "Arona", "Tarraco"],
  },
  {
    title: "Cupra",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Formentor", "Ateca", "Born"],
  },
  {
    title: "Škoda",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Octavia", "Superb", "Kodiaq", "Karoq"],
  },
  {
    title: "Lada",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Niva", "Vesta", "Granta"],
  },
  {
    title: "UAZ",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Patriot", "Hunter", "Bukhanka"],
  },
  {
    title: "GAZ",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Volga", "GAZelle"],
  },
  {
    title: "Kamaz",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["KAMAZ-5490", "KAMAZ-43118"],
  },
  {
    title: "Tata Motors",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Nexon", "Harrier", "Safari", "Tiago", "Altroz"],
  },
  {
    title: "Mahindra",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Scorpio", "Thar", "Bolero", "XUV700", "XUV300"],
  },
  {
    title: "Maruti Suzuki",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Swift", "Baleno", "Ertiga", "Alto", "WagonR"],
  },
  {
    title: "Hindustan Motors",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Ambassador", "Contessa"],
  },
  {
    title: "BYD",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Han EV", "Tang", "Dolphin", "Atto 3", "Seal"],
  },
  {
    title: "Geely",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Coolray", "Tugella", "Monjaro", "Xingyue", "Panda Mini"],
  },
  {
    title: "Chery",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Tiggo 7", "Tiggo 8", "Arrizo 5", "Omoda 5"],
  },
  {
    title: "NIO",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["ES6", "ES7", "ET5", "ET7", "EC7"],
  },
  {
    title: "XPeng",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["P7", "P5", "G3i", "G9"],
  },
  {
    title: "Hongqi",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["H9", "E-HS9", "L5", "HS5"],
  },
  {
    title: "Great Wall Motors",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Haval H6", "Tank 300", "Poer"],
  },
  {
    title: "Lynk & Co",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["01", "02", "03", "05"],
  },
  {
    title: "MG",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["ZS EV", "HS", "Gloster", "Hector"],
  },
  {
    title: "Aiways",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["U5", "U6"],
  },
  {
    title: "Holden",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Commodore", "Ute", "Monaro", "Torana"],
  },
  {
    title: "Troller",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["T4"],
  },
  {
    title: "Mack Trucks",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Anthem", "Granite", "Pinnacle"],
  },
  {
    title: "Kenworth",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["T680", "T880", "W900"],
  },
  {
    title: "Peterbilt",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["389", "579", "567"],
  },
  {
    title: "Scania",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["R Series", "S Series", "G Series"],
  },
  {
    title: "MAN",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["TGX", "TGM", "TGS"],
  },
  {
    title: "DAF",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["XF", "CF", "LF"],
  },
  {
    title: "Freightliner",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Cascadia", "M2 106"],
  },
  {
    title: "Tesla",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
  },
  {
    title: "Rivian",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["R1T", "R1S"],
  },
  {
    title: "Lucid Motors",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Air", "Gravity"],
  },
  {
    title: "Polestar",
    icon: ShieldMinus,
    paramKey: "make",
    model: ["Polestar 1", "Polestar 2", "Polestar 3"],
  },
];


