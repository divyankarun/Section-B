export const INSTAGRAM_URL = "https://www.instagram.com/sectionb.in/";

export const IMAGES = {
  heroCup: "/assets/hero-matcha.jpeg",
  menuMain: "/assets/menu-main.jpeg",
  menuDessert: "/assets/menu-dessert.jpeg",
  menuFood1: "/assets/menu-food-1.jpeg",
  menuFood2: "/assets/menu-food-2.jpeg",
  interior1:
    "https://images.unsplash.com/photo-1583354608715-177553a4035e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxib3V0aXF1ZSUyMGNhZmUlMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODc5MzY2ODR8MA&ixlib=rb-4.1.0&q=85",
  interior2:
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGNhZmUlMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODc5MzY2ODR8MA&ixlib=rb-4.1.0&q=85",
  burger:
    "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwYW5kJTIwZnJpZXN8ZW58MHx8fHwxNzg3OTM2Njg0fDA&ixlib=rb-4.1.0&q=85",
  people:
    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBpbiUyMGNhZmV8ZW58MHx8fHwxNzg3OTM2Njg0fDA&ixlib=rb-4.1.0&q=85",
};

export const MENU_CATEGORIES = [
  { key: "cold", label: "Cold Coffee" },
  { key: "hot", label: "Hot Coffee" },
  { key: "desserts", label: "Desserts" },
  { key: "food", label: "Food" },
];

export const MENU = {
  cold: [
    { name: "Classic Cold Coffee", price: 119, desc: "Smooth, creamy, perfectly chilled classic.", best: true },
    { name: "Iced Americano", price: 119, desc: "Bold espresso, chilled water, refreshing kick." },
    { name: "Sunrise Americano", price: 139, desc: "Citrusy twist on the Americano." },
    { name: "Tonic Espresso", price: 139, desc: "Fizzy tonic topped with rich espresso." },
    { name: "Iced Latte", price: 139, desc: "Creamy milk, smooth espresso, over ice.", best: true },
    { name: "Iced Mocha", price: 139, desc: "Chocolatey delight with a sweet finish." },
    { name: "Hazelnut Cold Coffee", price: 149, desc: "Nutty, aromatic, smooth hazelnut finish.", best: true },
    { name: "Salted Caramel", price: 159, desc: "Sweet caramel with a balancing hint of salt." },
    { name: "Irish Cold Coffee", price: 179, desc: "Rich, bold, classic Irish-style flavour." },
    { name: "Tiramisu Cold", price: 179, desc: "Dessert-like coffee, tiramisu inspired." },
    { name: "Biscoff Cold Coffee", price: 199, desc: "Creamy coffee, caramelised Biscoff goodness.", best: true },
  ],
  hot: [
    { name: "Espresso", price: 99, desc: "A bold, rich shot with intense aroma." },
    { name: "Americano", price: 129, desc: "Smooth espresso, light yet flavourful." },
    { name: "Cappuccino", price: 139, desc: "Espresso, steamed milk, thick foam." },
    { name: "Latte", price: 139, desc: "Silky espresso with steamed milk." },
    { name: "Mocha", price: 139, desc: "Espresso, chocolate and milk indulgence." },
    { name: "Macchiato", price: 149, desc: "Velvety microfoam over strong espresso." },
    { name: "Flat White", price: 139, desc: "Bold espresso stained with milk." },
    { name: "Hot Biscoff Latte", price: 189, desc: "Creamy latte, caramelised Biscoff.", best: true },
    { name: "Hot Spanish Latte", price: 199, desc: "Sweet, creamy, condensed-milk rich." },
  ],
  desserts: [
    { name: "New York Cheesecake", price: 129, desc: "The classic. Baked fresh daily." },
    { name: "Blueberry Blast Cheesecake", price: 139, desc: "Bright berries over silky cream." },
    { name: "Strawberry Love Cheesecake", price: 139, desc: "Sweet strawberry swirl.", best: true },
    { name: "Cookie Caramel Cheesecake", price: 149, desc: "Crunch, caramel, cream." },
    { name: "Biscoff Delight Cheesecake", price: 149, desc: "Caramelised Biscoff layers." },
    { name: "Double Chocolate Cheesecake", price: 159, desc: "Twice the chocolate." },
    { name: "Kit Kat Crunch Tub", price: 159, desc: "Melted chocolate, wafer crunch." },
    { name: "Melted Biscoff Tub", price: 189, desc: "Pure molten Biscoff indulgence.", best: true },
    { name: "Mini Pancakes", price: 129, desc: "8 pcs — choco pops to cookie crumble." },
    { name: "Hot Choco Lava", price: 99, desc: "Molten-centre chocolate cake." },
  ],
  food: [
    { name: "Ohhh Cheese Burger", price: 149, desc: "A very serious amount of cheese.", best: true },
    { name: "Tandoori Paneer Burger", price: 169, desc: "Smoky paneer, Indian spices.", best: true },
    { name: "Peri Peri Fries", price: 129, desc: "Fiery peri peri dusted fries." },
    { name: "Paneer Loaded Fries", price: 199, desc: "Loaded, cheesy, unapologetic." },
    { name: "Exotic Garlic Toast", price: 229, desc: "Our most extra garlic toast.", best: true },
    { name: "Mexican Wrap", price: 199, desc: "Zesty, beans, corn, tangy dressing." },
    { name: "Club Sandwich", price: 219, desc: "Triple-layered, grilled goodness.", best: true },
    { name: "Cheese Corn Pizza 10\"", price: 249, desc: "Creamy cheese, sweet corn." },
    { name: "Tandoori Paneer Pizza 10\"", price: 299, desc: "Smoky paneer, cheesy base.", best: true },
    { name: "Korean Cheese Bun", price: 259, desc: "Pulled-apart Korean cheese bomb." },
    { name: "Italian Pesto Pasta", price: 259, desc: "Fresh basil pesto, herby twist.", best: true },
    { name: "Hummus Platter", price: 239, desc: "Creamy hummus, pita, fresh sides." },
  ],
};

export const TESTIMONIALS = [
  { quote: "The Strawberry Matcha is genuinely a work of art. Layered, not-too-sweet, and that cup label makes my day every time.", name: "Aarav Mehta", tag: "Regular since day one" },
  { quote: "Best cold coffee in Rajendra Nagar, hands down. The Biscoff Cold Coffee is dangerously good.", name: "Sana Kapoor", tag: "Cold coffee loyalist" },
  { quote: "Freshly baked cheesecake at a cafe this size? Unreal. Strawberry Love is my weekly ritual now.", name: "Ritika Sharma", tag: "Dessert devotee" },
  { quote: "Korean Cheese Bun plus a Spanish Latte at 10 PM. This place understands the assignment.", name: "Dev Chauhan", tag: "Night-owl foodie" },
  { quote: "The vibe, the bear, the menu boards — everything feels considered. My favourite work-from-cafe spot.", name: "Ishita Verma", tag: "Remote worker" },
  { quote: "Ordered the whole dessert tub menu with friends. Zero regrets. Ten out of ten.", name: "Kabir Anand", tag: "Tub connoisseur" },
];

export const HOURS = [
  { day: "Monday — Sunday", time: "11:00 AM – 11:00 PM" },
];

export const ADDRESS = "Rajendra Nagar, Ghaziabad, Uttar Pradesh";

export const MARQUEE_ITEMS = [
  "Strawberry Matcha",
  "Biscoff Cold Coffee",
  "Korean Cheese Bun",
  "Hot Choco Lava",
  "Tandoori Paneer Pizza",
  "Spanish Latte",
  "Mini Pancakes",
  "Exotic Garlic Toast",
];
