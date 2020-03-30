import React from 'react';
import './DialButton.css';

export const DialButton = props => {
  const handleClick = () => {
    props.onClick(props.value)
  };
  const classes = ["DialButton"];
  if (props.secondary) {
    classes.push("DialButton--secondary");
    if (props.action) {
      classes.push("DialButton--secondary-action");
    }
  }
  return <button className={classes.join(" ")}
                 disabled={props.disabled}
                 onClick={handleClick}>{props.value}</button>;
};
