import React from 'react';
import './DialButton.css';

export const DialButton = props => {
  return <button className="DialButton" onClick={() => {
    props.onClick(props.value)
  }}>{props.value}</button>;
};

export const CleanButton = props => {
  return <button className="DialButton" onClick={() => props.onClick()}>C</button>;
};
