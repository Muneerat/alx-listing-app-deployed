import { PropertyProps } from "@/interfaces";
import mansion from "@/public/assets/mansion.svg";
import farm from "@/public/assets/farm.svg";
import home from "@/public/assets/home1.svg";
import livingRoom from "@/public/assets/living-room.svg";
import vila from "@/public/assets/villa.svg";
import palmTree from "@/public/assets/palm-tree.svg";
import keyChain from "@/public/assets/key-chain.svg";
import swimming from "@/public/assets/swimming-pool.svg";
import vacation from "@/public/assets/vacations.svg";
import island from "@/public/assets/island.svg";
import tent from "@/public/assets/tent.svg";
import Apartment from "@/public/assets/apartment.svg";
import Lakefront from "@/public/assets/cottage.svg";
import farmHouse from "@/public/assets/barn.svg";
import Treehouse from "@/public/assets/treehouse.svg";
import cabin from "@/public/assets/cabin.svg";
import Castles from "@/public/assets/castle-tower.svg";
import product1 from "@/public/assets/product1.svg";
import product2 from "@/public/assets/product2.svg";
import product3 from "@/public/assets/product3.svg";
import product4 from "@/public/assets/product4.svg";
import product5 from "@/public/assets/product5.svg";
import product6 from "@/public/assets/product6.svg";
import product7 from "@/public/assets/product7.svg";
import product8 from "@/public/assets/product8.svg";
import product9 from "@/public/assets/product9.svg";
import product10 from "@/public/assets/product10.svg";
import product11 from "@/public/assets/product11.svg";
import product12 from "@/public/assets/product12.svg";
import product13 from "@/public/assets/product13.svg";
import product14 from "@/public/assets/product14.svg";
import product15 from "@/public/assets/product15.svg";
import product16 from "@/public/assets/product16.svg";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "https://example.com/image2.jpg",
    discount: "30",
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "https://example.com/image3.jpg",
    discount: "",
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "https://example.com/image4.jpg",
    discount: "15",
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "https://example.com/image5.jpg",
    discount: "20",
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "https://example.com/image6.jpg",
    discount: "",
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "https://example.com/image7.jpg",
    discount: "10",
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "https://example.com/image8.jpg",
    discount: "25",
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "https://example.com/image9.jpg",
    discount: "",
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "https://example.com/image10.jpg",
    discount: "40",
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "https://example.com/image11.jpg",
    discount: "50",
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://example.com/image12.jpg",
    discount: "",
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "https://example.com/image13.jpg",
    discount: "35",
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "https://example.com/image14.jpg",
    discount: "",
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "https://example.com/image15.jpg",
    discount: "20",
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "https://example.com/image16.jpg",
    discount: "25",
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "https://example.com/image17.jpg",
    discount: "30",
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "https://example.com/image18.jpg",
    discount: "",
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "https://example.com/image19.jpg",
    discount: "60",
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "https://example.com/image20.jpg",
    discount: "",
  },
];

export const ImageCarousel = [
  {
    src: livingRoom,
    alt: "livingRoom ",
    caption: "Room",
  },
  {
    src: mansion,
    alt: "mansion ",
    caption: "Mansion",
  },
  {
    src: farm,
    alt: "country side ",
    caption: "Countryside",
  },
  {
    src: vila,
    alt: "vila ",
    caption: "Vila",
  },
  {
    src: palmTree,
    alt: "palmTree ",
    caption: "Tropical",
  },
  {
    src: keyChain,
    alt: "keyChain ",
    caption: "New",
  },
  {
    src: swimming,
    alt: "swimming ",
    caption: "Amazing pool",
  },
  {
    src: vacation,
    alt: "vacation ",
    caption: "Beach house",
  },
  {
    src: island,
    alt: "island ",
    caption: "Island",
  },
  {
    src: tent,
    alt: "tent ",
    caption: "Camping",
  },
  {
    src: Apartment,
    alt: "Apartment ",
    caption: "Apartment",
  },
  {
    src: home,
    alt: "home ",
    caption: "House",
  },
  {
    src: Lakefront,
    alt: "Lakefront ",
    caption: "Lakefront",
  },
  {
    src: farmHouse,
    alt: "Farm house ",
    caption: "Farm house",
  },
  {
    src: Treehouse,
    alt: "Treehouse ",
    caption: "Treehouse",
  },
  {
    src: cabin,
    alt: "cabin ",
    caption: "Cabins",
  },
  {
    src: Castles,
    alt: "Castles ",
    caption: "Castles",
  },
  {
    src: farm,
    alt: "farm ",
    caption: "Lake",
  },
];

export const allProducts = [
  {
    id: 1,
    name: "Villa Arrecife Beach House",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product1,
    person: "2-4",
    shower: "2",
    room: "4",
    price: "$2,450",
    location: "Sideman, Bali, Indonesia",
    discount: "60% Off"
  },
    {
    id: 2,
    name: "Entire cabin ",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product2,
    person: "3",
    shower: "1",
    room: "1",
    price: "$62",
    location: "Nova Friburgo, Brazil"
  },
    {
    id: 3,
    name: "Earthen home ",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product3,
    person: "6",
    shower: "2",
    room: "4",
    price: "$386",
    location: "Santa Marta, Colombia"
  },
    {
    id: 4,
    name: "Private room ",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product4,
    person: "2",
    shower: "1",
    room: "1",
    price: "$134",
    location: "Moeda, Brazil"
  },
  {
    id: 5,
    name: "Gokce Gemile Estate",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product5,
    person: "12",
    shower: "6",
    room: "6",
    price: "$980",
    location: "Kayaköy, Turkey"
  },
    {
    id: 6,
    name: "Luxury 1000 sqm Villa...",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product6,
    person: "12",
    shower: "6",
    room: "6",
    price: "$1,430",
    location: "Marrakech, Morocco"
  },
    {
    id: 7,
    name: "Palais Hassoun Marrakech",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product7,
    person: "26",
    shower: "13",
    room: "13",
    price: "$3,450",
    location: "Marrakech, Morocco"
  },
  {
    id: 8,
    name: "Villa Lamp",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product8,
    person: "12",
    shower: "7",
    room: "7",
    price: "$2,041",
    location: "Benahavis, Spain"
  },
    {
    id: 9,
    name: "Villa l 'Oui d' Or",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product9,
    person: "14",
    shower: "7",
    room: "8",
    price: "$1,009",
    location: "Marrakech, Morocco"
  },
    {
    id: 10,
    name: "Designer villa, pool not ...",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product10,
    person: "16",
    shower: "21",
    room: "12",
    price: "$1,289",
    location: "Marrakech, Morocco"
  },
  {
    id: 11,
    name: "Royal Zephyr - Marrakech",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product16,
    person: "12",
    shower: "7",
    room: "7",
    price: "$1,692",
    location: "Marrakesh, Morocco"
  },
    {
    id: 12,
    name: "Rïad Mayo & Bungalows",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product11,
    person: "16+",
    shower: "18",
    room: "21",
    price: "$865",
    location: "Sidi Abdallah Ghiat, Morocco"
  },
    {
    id: 13,
    name: "Casa de Carolina",
    categories: ["Book Now Pay Later", "Self CheckIn", "Free Reschedule"],
    img: product12,
    person: "4",
    shower: "1",
    room: "1",
    price: "$215",
    location: "Playas de Vera, Spain"
  },
   {
    id: 14,
    name: "Happy Valley Villa, Tuni...",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product13,
    person: "8",
    shower: "3",
    room: "7",
    price: "$100",
    location: "Qaroun, Egypt"
  },
    {
    id: 15,
    name: "Almyros Residence ",
    categories: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    img: product14,
    person: "10",
    shower: "4",
    room: "6",
    price: "$865",
    location: "Lasithi, Greece"
  },
    {
    id: 16,
    name: "Villa White Stone mode...",
    categories: ["Instant Book", "Self CheckIn", ],
    img: product15,
    person: "12",
    shower: "6",
    room: "7",
    price: "$1,798",
    location: "Marrakech, Morocco"
  },
];
