import type { Product } from "../types/dummyType";
import reactLog from "../assets/react.svg";

// Import img here 👇🏻 ------------------------------------------------------------------------------------------------------
export const assetImg = {
  reactLog,
};



// Dummy data 👇🏻 -----------------------------------------------------------------------------------------------------------
export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 89.99,
    image: "https://via.placeholder.com/300x300.png?text=Headphones",
    description: "Noise-cancelling wireless headphones with deep bass.",
    category: "Electronics",
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    image: "https://via.placeholder.com/300x300.png?text=Smart+Watch",
    description: "Water-resistant smartwatch with heart-rate monitor.",
    category: "Wearables",
    inStock: false,
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://via.placeholder.com/300x300.png?text=Speaker",
    description: "Portable Bluetooth speaker with 10-hour battery life.",
    category: "Audio",
    inStock: true,
  },
];
