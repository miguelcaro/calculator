import React from "react";
import Link from "gatsby-link";
import { css } from "react-emotion";
import Wrapper from "../Wrapper";
import logo from "../../assets/images/logo.png";

const headerCss = css`
  padding: 41px 11px 31px;
`;

const titleCss = css`
  margin: 0;
`;

const Header = () => (
  <header className={headerCss}>
    <Wrapper>
      <h1 className={titleCss}>
        <Link to="/">
          <img src={logo} alt="Beyond debt solutions" />
        </Link>
      </h1>
    </Wrapper>
  </header>
);

export default Header;
