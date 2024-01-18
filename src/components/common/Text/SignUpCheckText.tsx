interface SignUpCheckTextProps {
  color: string;
  text: string;
}
export const SignUpCheckText = (props: SignUpCheckTextProps) => {
  const style = "text-start text-smallFont mt-1 h-4 " + props.color;
  return <p className={style}>{props.text}</p>;
};
