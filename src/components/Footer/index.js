import React from "react";
import Link from "gatsby-link";
import { css } from "react-emotion";
import Wrapper from "../Wrapper";
import logo from "../../assets/images/logo-white.png";

const footerCss = css`
  background-color: #414141;
  color: #c1c1c1;
  font-size: 13px;
  padding: 46px 0 74px;
  @media (max-width: 620px) {
    padding: 27px 0 42px;
  }
`;

const logoCss = css`
  margin-bottom: 22px;
  @media (max-width: 620px) {
    margin-bottom: 36px;
  }
`;

const navigationCss = css`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: 1.9230769231;
  margin-bottom: 39px;
  @media (max-width: 620px) {
    border-bottom: 1px solid #a8a8a8;
    flex-direction: column;
    margin-bottom: 17px;
    padding-bottom: 21px;
  }
`;

const copyrightCss = css`
  margin: 0;
  @media (max-width: 620px) {
    margin-bottom: 18px;
  }
`;

const menuCss = css`
  display: flex;
  list-style: none;
  margin: 0;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const linkCss = css`
  color: #c1c1c1;
  margin-left: 15px;
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 620px) {
    margin-left: 0;
  }
`;

const noteCss = css`
  line-height: 1.4615384615;
  margin: 0;
`;

const Footer = () => (
  <footer className={footerCss}>
    <Wrapper>
      <div className={logoCss}>
        <img src={logo} alt="./logo-white.png" />
      </div>
      <div className={navigationCss}>
        <p className={copyrightCss}>
          © 2017 Beyond Finance. All rights reserved.
        </p>
        <nav className={menuCss}>
          <Link to="#" className={linkCss}>
            Home
          </Link>
          <Link to="#" className={linkCss}>
            About Us
          </Link>
          <Link to="#" className={linkCss}>
            Free Evaluation
          </Link>
          <Link to="#" className={linkCss}>
            Privacy Policy
          </Link>
          <Link to="#" className={linkCss}>
            Terms of Use
          </Link>
        </nav>
      </div>
      <p className={noteCss}>
        *Clients who make all their monthly program payments pay approximately
        50-55% of their enrolled balance before fees, or 68%-80% including fees,
        over 24 to 48 months. Not all clients are able to complete our program
        for various reasons, including their ability to save sufficient funds.
        Our estimatesare based on prior results, which will vary depending on
        your specific circumstances. We do not guarantee that your debts will be
        resolved for a specific amount or percentage or within a specific period
        of time. We do not assume your debts, make monthly payments to creditors
        or provide tax, bankruptcy, accounting or legal advice or credit repair
        services. Our service is not available in all states and our fees may
        vary from state to state. Please contact a tax professional to discuss
        potential tax consequences of less than full balance debt resolution.
        Read and understand all program materials prior to enrollment. The use
        of debt settlement services will likely adversely affect your
        creditworthiness, may result in you being subject to collections or
        being sued by creditors or collectors and may increase the outstanding
        balances of your enrolled accounts due to the accrual of fees and
        interest. However, negotiated settlements we obtain on your behalf
        resolve the entire account, including all accrued fees and interest.
      </p>
    </Wrapper>
  </footer>
);

export default Footer;
