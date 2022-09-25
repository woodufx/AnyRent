import React, { ChangeEventHandler } from "react";
import "./popover.less";

export interface PopoverProps {
  background?: string;
  color?: string;
  text: string;
}

const Popover = (props: PopoverProps) => {
  const style = {
    background: `${props.background}`,
    color: `${props.color}`
  }

  return (
    <div
      style={style}
      className='popover'
    >
      {props.text}
    </div>
  );
};

export default Popover;
