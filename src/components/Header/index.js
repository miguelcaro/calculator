import React from "react";
import Link from "gatsby-link";
import { css } from "react-emotion";
import Wrapper from "../Wrapper";
import Tab from "../Tab";
import logo from "../../assets/images/logo.png";

const headerCss = css`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 620px) {
    padding: 32px 0 14px;
  }
`;

const headerContainerCss = css`
  align-items: flex-end;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  padding: 41px 0px 0 11px;
`;

const titleCss = css`
  margin: 0 0 30px;
`;

const logoCss = css`
  display: block;
`;

const Header = () => (
  <header className={headerCss}>
    <Wrapper>
      <div className={headerContainerCss}>
        <h1 className={titleCss}>
          <Link to="/">
            <img src={logo} className={logoCss} alt={"Beyond debt solutions"} />
          </Link>
        </h1>
        <Tab
          text={"TALK TO A CERTIFIED DEBT SPECIALIST"}
          phoneNumber={"1-800-XXX-XXXX"}
        />
      </div>
    </Wrapper>
  </header>
);

export default Header;
