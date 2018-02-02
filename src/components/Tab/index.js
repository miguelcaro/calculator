import React from "react";
import { css } from "react-emotion";
import Icon from "../Icon";

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
  @media (max-width: 620px) {
    bottom: 0;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.05;
    max-width: 152px;
    padding: 4px 15px 7px 33px;
    position: relative;
    right: 0;
  }
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
  @media (max-width: 620px) {
    font-size: 10px;
    margin-top: 0;
  }
`;

const iconCss = css`
  font-size: 39px;
  left: -7px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 620px) {
    display: none;
  }
`;

const Tab = ({ text, phoneNumber }) => {
  return (
    <div className={containerCss}>
      <Icon iconClass={"person"} modifierClass={iconCss} />
      {text}
      <span className={numberCss}>{phoneNumber}</span>
    </div>
  );
};

export default Tab;
