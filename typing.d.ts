export interface Product {
  id?: number;
  product: string;
  price: string;
}

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

export type Todo = {
  id: number | string;
  title: string;
  completed: boolean;
};
