import styled from "react-emotion";

export default styled("div")`
  border: 2px solid #dbdbdb;
  margin-bottom: 29px;
  padding: 16px 12px 14px;
  position: relative;
  .title {
    color: #bfbfbf;
    font-size: 18px;
    font-weight: 400;
    line-height: 0.5833333333;
    margin: 0 0 41px;
  }
  .tab {
    background-color: #2c87c8;
    color: white;
    font-size: 14px;
    font-weight: 800;
    line-height: 0.75;
    padding: 11px 31px 10px 95px;
    position: absolute;
    bottom: calc(100% + 3px);
    right: -1px;
    &::before {
      background-color: inherit;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
      content: "";
      height: 100%;
      position: absolute;
      right: 100%;
      top: 0;
      width: 24px;
    }
    &__number {
      display: block;
      font-size: 20px;
      margin-top: 12px;
    }
  }
`;
