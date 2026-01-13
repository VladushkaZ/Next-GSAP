export interface Post {
  name: string;
  [key: string]: string;
}

export interface Rout {
  id: number;
  label?: string;
  link: string;
}