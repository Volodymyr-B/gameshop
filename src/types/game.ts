export interface IGame {
  id: number;
  name: string;
  image?: string;
  price: number;
  description: string;
  ageLimit: number;
  rating: number;
  alt: string;
  amount: number;
  genre: string;
  platform: Platform;
}
interface Platform {
  pc: boolean;
  playstation: boolean;
  xbox: boolean;
}
