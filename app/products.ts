export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "RGB 電競鍵盤",
    price: 1990,
  },
  {
    id: 2,
    name: "電競滑鼠",
    price: 1290,
  },
  {
    id: 3,
    name: "遊戲耳機",
    price: 2490,
  },
  {
    id: 4,
    name: "大型電競滑鼠墊",
    price: 790,
  },
  {
  id: 5,
  name: "機械式遊戲手把",
  price: 1690,
  },
];