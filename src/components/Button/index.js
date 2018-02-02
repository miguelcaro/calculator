import React from "react";
import { css } from "react-emotion";

const buttonCss = css`
  background-color: #1fb35d;
  border-radius: 9px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 32px;
  color: white;
  line-height: 1.171875;
  padding: 8px 52px 7px;
  @media (max-width: 620px) {
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.075;
    padding: 7px 30px;
  }
`;

const Button = ({ text, disabled, onClickEvent }) => {
  return (
    <button className={buttonCss} disabled={disabled} onClick={onClickEvent}>
      {text}
    </button>
  );
};

export default Button;
