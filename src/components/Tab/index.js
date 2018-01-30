import React from "react";
import { css } from "react-emotion";

const containerCss = css`
  background-color: #2c87c8;
  color: white;
  font-size: 14px;
  font-weight: 800;
  line-height: 0.75;
  padding: 11px 31px 10px 95px;
  position: absolute;
  bottom: calc(100% + 3px);
  right: -1px;
  &::before {
    background-color: inherit;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
    content: "";
    height: 100%;
    position: absolute;
    right: 100%;
    top: 0;
    width: 24px;
  }
`;

const numberCss = css`
  display: block;
  font-size: 20px;
  margin-top: 12px;
`;

const Tab = ({ text, phoneNumber }) => {
  return (
    <div className={containerCss}>
      {text}
      <span className={numberCss}>{phoneNumber}</span>
    </div>
  );
};

export default Tab;
