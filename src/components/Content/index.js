import React from "react";
import { css } from "react-emotion";
import Tab from "../Tab";

const containerCss = css`
  border: 2px solid #dbdbdb;
  margin-bottom: 29px;
  padding: 16px 12px 14px;
  position: relative;
`;

const titleCss = css`
  color: #bfbfbf;
  font-size: 18px;
  font-weight: 400;
  line-height: 0.5833333333;
  margin: 0 0 41px;
`;

const Content = ({ title, tabText, tabPhoneNumber, children }) => {
  return (
    <div className={containerCss}>
      <Tab text={tabText} phoneNumber={tabPhoneNumber} />
      <h2 className={titleCss}>{title}</h2>
      {children}
    </div>
  );
};

export default Content;
