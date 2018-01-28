import React from "react";
import Link from "gatsby-link";
import MainFooter from "../../styles/footer";
import Wrapper from "../Wrapper";
import logo from "../../../public/static/logo-white.png";

const Footer = () => (
  <MainFooter>
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="./logo-white.png" />
      </div>
      <div className="navigation">
        <p className="copyright">© 2017 Beyond Finance. All rights reserved.</p>
        <nav className="menu">
          <a className="menu__item">Home</a>
          <a className="menu__item">About Us</a>
          <a className="menu__item">Free Evaluation</a>
          <a className="menu__item">Privacy Policy</a>
          <a className="menu__item">Terms of Use</a>
        </nav>
      </div>
      <p className="note">
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
  </MainFooter>
);

export default Footer;
