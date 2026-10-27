export default interface NavType{
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
} 

interface categoryIconhange {
  dir: string,
  pct: number
}

interface Market {
  market: string,
  division: string,
  min: number,
  max: number
}

export default interface ProductType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: Change;
  markets: Market[];
}