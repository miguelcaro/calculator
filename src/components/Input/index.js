import styled from "react-emotion";

export default styled("div")`
  border: 2px solid #dbdbdb;
  margin-bottom: 34px;
  position: relative;
  width: 100%;
  input {
    border: 0 none;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    height: 61px;
    line-height: 61px;
    font-size: 45px;
    padding: 1px 19px 1px 35px;
    width: 100%;
  }
  &.currency {
    &::before {
      color: #414141;
      content: "$";
      font-size: 26px;
      font-weight: 600;
      left: 19px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.percentage {
    margin-bottom: 15px;
    input {
      padding: 1px 108px 1px 19px;
      text-align: right;
      &::placeholder {
        color: #dcdcdc;
      }
    }
    &::before {
      bottom: 8px;
      color: #414141;
      content: "%";
      font-size: 24px;
      font-weight: 600;
      position: absolute;
      right: 86px;
    }
  }
`;