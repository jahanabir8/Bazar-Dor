export default interface NavType{
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
} 

export default interface ProductType {
  id: string;
  slug: string;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: { dir: "up" | "down" | "flat"; pct: number };
}