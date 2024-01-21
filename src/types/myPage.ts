export type MyPageType = {
  gender: boolean;
  dogs: Dogs[];
};

export type Dogs = {
  image: string;
  name: string;
  age: number;
  type: string;
  main: boolean;
};
