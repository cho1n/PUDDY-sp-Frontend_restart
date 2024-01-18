export interface NeuterRadioProps {
  neuter: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const NeuterRadio = (props: NeuterRadioProps) => {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        checked={props.neuter}
        name="neuter"
        value="true"
        onChange={props.onChange}
      />
      <p className="text-default ml-1 w-12 text-start">Y</p>
      <input
        type="checkbox"
        checked={!props.neuter}
        name="neuter"
        value="false"
        onChange={props.onChange}
      />
      <p className="text-default ml-1">N</p>
    </div>
  );
};
