export type SignInInputType = {
  login: string;
  password: string;
};
export type SignUpInputType = {
  login: string;
  password: string;
  birth: string;
  mainAddress: string;
  subAddress: string;
  gender: boolean;
};
export type DogTag = {
  content: string;
};
export type PostDogInputType = {
  image: string;
  registerNum: string;
  name: string;
  type: string;
  birth: string;
  gender: boolean;
  neuter: boolean;
  tags: DogTag[];
};
