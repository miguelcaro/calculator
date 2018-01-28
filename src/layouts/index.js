import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Icons from "../components/Icons";
import Wrapper from "../components/Wrapper";
import "../styles/global";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Beyond Calculator"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Icons />
    <Header />
    <Wrapper>{children()}</Wrapper>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
