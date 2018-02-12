import React from "react";
import { css } from "react-emotion";

const containerCss = css`
  border: 2px solid #dbdbdb;
  margin-bottom: 34px;
  position: relative;
  width: 100%;
  @media (max-width: 620px) {
    margin-bottom: 21px;
  }
`;

const currencyCss = css`
  &::before {
    color: #414141;
    content: "$";
    font-size: 26px;
    font-weight: 600;
    left: 19px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 620px) {
      font-size: 20px;
      left: 8px;
    }
  }
`;

const percentageCss = css`
  margin-bottom: 15px;
  input {
    padding: 1px 108px 1px 19px;
    text-align: right;
    @media (max-width: 620px) {
      padding-right: 72px;
    }
    &::placeholder {
      color: #dcdcdc;
    }
  }
  &::before {
    bottom: 8px;
    color: #414141;
    content: "%";
    font-size: 24px;
    font-weight: 600;
    position: absolute;
    right: 86px;
    @media (max-width: 620px) {
      font-size: 20px;
      right: 48px;
    }
  }
`;

const inputCss = css`
  border: 0 none;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  height: 61px;
  font-size: 38px;
  padding: 1px 19px 1px 45px;
  width: 100%;
  @media (max-width: 620px) {
    font-weight: 200;
    height: 49px;
    letter-spacing: -2.1px;
    padding-left: 20px;
  }
`;

const typeClass = type => {
  switch (type) {
    case "currency":
      return currencyCss;
    case "percentage":
      return percentageCss;
    default:
      break;
  }
};

const Input = ({ type, value, placeholder, onChangeEvent, isActive }) => {
  return (
    <div className={`${containerCss} ${typeClass(type)}`}>
      <input
        className={inputCss}
        type="text"
        value={value}
        onChange={onChangeEvent}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
};

export default Input;
