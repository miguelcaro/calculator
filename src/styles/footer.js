import styled from "react-emotion";

export default styled("footer")`
  background-color: #414141;
  color: #c1c1c1;
  font-size: 13px;
  padding: 46px 0 74px;
  .logo {
    margin-bottom: 22px;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    line-height: 1.9230769231;
    margin-bottom: 39px;
  }
  .copyright {
    margin: 0;
  }
  .menu {
    display: flex;
    list-style: none;
    margin: 0;
    &__item {
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .note {
    line-height: 1.4615384615;
    margin: 0;
  }
`;
