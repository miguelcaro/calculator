import React from "react";
import Link from "gatsby-link";
import MainHeader from "../../styles/header";
import Wrapper from "../Wrapper";
import logo from "../../../public/static/logo.png";

const Header = () => (
  <MainHeader>
    <Wrapper>
      <h1 className="title">
        <Link to="/">
          <img src={logo} alt="Beyond debt solutions" />
        </Link>
      </h1>
    </Wrapper>
  </MainHeader>
);

export default Header;
