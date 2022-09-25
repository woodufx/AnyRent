import "./button.less";

import uploadButtonIcon from "../../assets/styles/img/uploadButtonIcon.png";
import penButtonIcon from "../../assets/styles/img/penButtonIcon.png";
import callButtonIcon from "../../assets/styles/img/callButtonIcon.png";
import messageButtonIcon from "../../assets/styles/img/messageButtonIcon.png";

export interface ButtonProps {
  text?: string;
  type?:
  "submit"
  | "button"
  | "reset";
  variant?:
  "sign-in"
  | "big-violet"
  | "big-violet-secondary"
  | "medium-violet"
  | "long-violet"
  | "longest-violet"
  | "medium-lavender"
  | "small-lavender"
  icon?:
  "upload"
  | "pen"
  | "call"
  | "message";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export const ARButton = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`ar-button ar-button--${props.variant}${props.icon ? ` ar-button--${props.icon}-icon` : ``}`}
      onClick={props.onClick!}
      disabled={props.isDisabled}
    >
      {props.text}
    </button>
  );
};
