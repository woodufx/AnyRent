import "./button.less";

export interface ButtonProps {
  text?: string;
  className?: string;
  fill?: string;
  d?: string;
  type?: "submit" | "button" | "reset";

}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className}
    >
      {props.text}
    </button>
  );
};

export default Button;
