import { UpdateDogProfileInputType } from "../../types/update";

interface DogProfileUpdateProps {
  UpdateDogValue: UpdateDogProfileInputType;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onGenderCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onAddressCheck: () => void;
}

export const DogProfileUpdateTemplate = () => {
  return <div></div>;
};
