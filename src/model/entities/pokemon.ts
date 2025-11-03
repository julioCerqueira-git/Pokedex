export default interface Pokemon {
  id: number;
  name: string;
  image: string | null;
  height: number;
  weight: number;
  types: string[];
}