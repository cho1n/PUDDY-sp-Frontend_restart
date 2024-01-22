export type MyPageType = {
  gender: boolean;
  dogs: Dogs[];
};

export type Dogs = {
  id: number;
  image: string;
  name: string;
  age: number;
  type: string;
  main: boolean;
};
