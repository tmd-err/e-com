export const Categories = [
    "ELECTRONICS","FASHION","HOME & KITCHEN" ,"BEAUTY" ,"SPORTS","AUTOMOTIVE"
] ;
export const productsData = [
    {
        "id": 1,
        "image": "leatherJacket.webp",
        "name": "Leather Jacket",
        "price": 100,
        "discount": 10,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "FASHION",
        "description": "A stylish and durable leather jacket that keeps you warm and makes a bold fashion statement. Perfect for casual outings and cool weather.",
        "targeted": ["men"]
    },
    {
        "id": 2,
        "image": "bluetoothHeadphones.webp",
        "name": "Bluetooth Headphones",
        "price": 150,
        "discount": 15,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "High-quality Bluetooth headphones offering superior sound clarity, noise cancellation, and long battery life. Ideal for music lovers and gamers.",
        "targeted": ["men", "women"]
    },
    {
        "id": 3,
        "image": "smartphoneCase.webp",
        "name": "Smartphone Case",
        "price": 200,
        "discount": 20,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A premium smartphone case that provides excellent protection against scratches and drops while adding a touch of elegance to your device.",
        "targeted": ["men", "women", "kids"]
    },
    {
        "id": 4,
        "image": "gamingMouse.webp",
        "name": "Gaming Mouse",
        "price": 50,
        "discount": 5,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A high-precision gaming mouse designed for gamers. Features customizable buttons and an ergonomic design for extended use.",
        "targeted": ["men"]
    },
    {
        "id": 5,
        "image": "protableSpeaker.webp",
        "name": "Portable Speaker",
        "price": 120,
        "discount": 12,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A compact and powerful portable speaker with excellent sound quality. Ideal for parties, outdoor adventures, and everyday use.",
        "targeted": ["men", "women"]
    },
    {
        "id": 6,
        "image": "smartwatch.webp",
        "name": "Smartwatch",
        "price": 80,
        "discount": 8,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "An elegant smartwatch with health-tracking features, notifications, and water resistance. Perfect for fitness enthusiasts and tech lovers.",
        "targeted": ["men", "women"]
    },
    {
        "id": 7,
        "image": "wirelessCharger.webp",
        "name": "Wireless Charger",
        "price": 130,
        "discount": 13,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A fast and efficient wireless charger compatible with a wide range of devices. Enjoy hassle-free charging with this sleek device.",
        "targeted": ["men", "women"]
    },
    {
        "id": 8,
        "image": "laptopSleever.webp",
        "name": "Laptop Sleeve",
        "price": 110,
        "discount": 11,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "FASHION",
        "description": "A stylish and protective laptop sleeve that combines functionality with elegance. Keep your laptop safe from scratches and bumps.",
        "targeted": [ "women"]
    },
    {
        "id": 9,
        "image": "fitnessWrapper.webp",
        "name": "Fitness Tracker",
        "price": 90,
        "discount": 9,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "SPORTS",
        "description": "A lightweight and feature-rich fitness tracker to monitor your health, including steps, heart rate, and sleep patterns.",
        "targeted": ["men", "women", "kids"]
    },
    {
        "id": 10,
        "image": "tabletStand.webp",
        "name": "Tablet Stand",
        "price": 140,
        "discount": 14,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "HOME & KITCHEN",
        "description": "A durable and adjustable tablet stand, perfect for work, cooking, or watching movies hands-free.",
        "targeted": [ "women"]
    },
    {
        "id": 11,
        "image": "phoneHolder.webp",
        "name": "Phone Holder",
        "price": 75,
        "discount": 7,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "AUTOMOTIVE",
        "description": "A sturdy and flexible phone holder for cars. Ensures safe hands-free phone usage during drives.",
        "targeted": ["men"]
    },
    {
        "id": 12,
        "image": "digitalCamera.webp",
        "name": "Digital Camera",
        "price": 160,
        "discount": 16,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A high-resolution digital camera with advanced features for capturing stunning photos and videos. Ideal for photography enthusiasts.",
        "targeted": ["men", "women"]
    },
    {
        "id": 13,
        "image": "vrheadset.webp",
        "name": "VR Headset",
        "price": 170,
        "discount": 17,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "An immersive VR headset designed for gaming and virtual experiences. Compatible with various platforms for endless entertainment.",
        "targeted": ["men", "women","kids"]
    },
    {
        "id": 14,
        "image": "powerBank.webp",
        "name": "Power Bank",
        "price": 60,
        "discount": 6,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A portable and fast-charging power bank to keep your devices powered up on the go. Lightweight and compact design.",
        "targeted": ["men", "women"]
    },
    {
        "id": 15,
        "image": "laptopStand.webp",
        "name": "Laptop Stand",
        "price": 180,
        "discount": 18,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "HOME & KITCHEN",
        "description": "An ergonomic laptop stand to improve posture and reduce strain during long work hours. Adjustable and foldable for convenience.",
        "targeted": ["men", "women"]
    },
    {
        "id": 16,
        "image": "noiseCancelling.webp",
        "name": "Noise Cancelling Headphones",
        "price": 220,
        "discount": 22,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "Premium noise-cancelling headphones with superior sound quality and comfort. Block out distractions and focus on your music.",
        "targeted": ["men"]
    },
    {
        "id": 17,
        "image": "externalHardDrive.webp",
        "name": "External Hard Drive",
        "price": 130,
        "discount": 13,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A high-capacity external hard drive for storing and backing up your files securely. Reliable and fast data transfer speeds.",
        "targeted": ["men", "women"]
    },
    {
        "id": 18,
        "image": "monitor.webp",
        "name": "4K Monitor",
        "price": 200,
        "discount": 20,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A stunning 4K monitor for ultra-clear visuals and vibrant colors. Ideal for gaming, video editing, and professional tasks.",
        "targeted": ["men", "women"]
    },
    {
        "id": 19,
        "image": "smartHome.webp",
        "name": "Smart Home Hub",
        "price": 250,
        "discount": 25,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "HOME & KITCHEN",
        "description": "A versatile smart home hub to connect and control your devices effortlessly. Supports voice commands for ultimate convenience.",
        "targeted": ["men", "women"]
    },
    {
        "id": 20,
        "image": "keyboardAndMouse.webp",
        "name": "Keyboard and Mouse Combo",
        "price": 95,
        "discount": 9,
        "rating": Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => "⭐"),
        "category": "ELECTRONICS",
        "description": "A reliable keyboard and mouse combo designed for smooth performance and durability. Perfect for work and gaming.",
        "targeted": ["men"]
    }
];
