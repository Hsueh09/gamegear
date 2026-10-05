export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "RGB 電競鍵盤",
    price: 1990,
    image: "/products/keyboard.jpg",
    category: "鍵盤",
    description: "具備 RGB 燈效的電競鍵盤，適合遊戲與日常使用。",
  },
  {
    id: 2,
    name: "電競滑鼠",
    price: 1290,
    image: "/products/mouse.jpg",
    category: "滑鼠",
    description: "輕巧靈敏的電競滑鼠，適合需要快速操作的遊戲玩家。",
  },
  {
    id: 3,
    name: "遊戲耳機",
    price: 2490,
    image: "/products/headset.jpg",
    category: "耳機",
    description: "提供清晰音效的遊戲耳機，適合遊戲、語音聊天與影音娛樂。",
  },
  {
    id: 4,
    name: "電競螢幕",
    price: 3000,
    image: "/products/monitor.jpg",
    category: "顯示器",
    description: "適合遊戲使用的電競螢幕，提供清楚的畫面顯示。",
  },
];