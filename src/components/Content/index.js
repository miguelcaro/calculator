import React from "react";
import { css } from "react-emotion";

const containerCss = css`
  border: 2px #dbdbdb;
  border-style: none solid solid;
  margin-bottom: 29px;
  padding: 16px 12px 14px;
  position: relative;
  @media (max-width: 620px) {
    border: 0 none;
    margin-bottom: 0;
    padding: 0;
  }
`;

const contentHeaderCss = css`
  @media (max-width: 620px) {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }
`;

const titleCss = css`
  color: #bfbfbf;
  font-size: 18px;
  font-weight: 400;
  line-height: 0.5833333333;
  margin: 0 0 41px;
  @media (max-width: 620px) {
    color: #dbdbdb;
    font-size: 13px;
    font-weight: 600;
    line-height: 0.8076923077;
    margin-bottom: 0;
  }
`;

const Content = ({ title, tabText, tabPhoneNumber, children }) => {
  return (
    <div className={containerCss}>
      <div className={contentHeaderCss}>
        <h2 className={titleCss}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Content;
