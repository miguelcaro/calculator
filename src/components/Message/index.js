import styled from "react-emotion";

export default styled("div")`
  background-color: #2c87c8;
  border: 1px solid #dfdfdf;
  margin-bottom: 27px;
  padding: 29px 26px 27px 28px;
  .content {
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 13px;
    color: #2b86c7;
    padding: 36px 0 39px;
    text-align: center;
  }
  &.step1 {
    .content {
      padding-top: 19px;
    }
    .icon {
      font-size: 127px;
      margin-bottom: 19px;
    }
    p {
      font-size: 26px;
      font-weight: 600;
      letter-spacing: -0.13px;
      line-height: 0.8269230769;
      margin: 0;
    }
    span {
      display: block;
      font-size: 42px;
      font-weight: 600;
      letter-spacing: 0.88px;
      line-height: 0.5119047619;
      margin: 31px 0 6px;
    }
  }
  &.step2,
  &.step3,
  &.step4 {
    border-radius: 12px;
    padding: 31px 26px 67px 28px;
    .content {
      background-color: inherit;
      border: 0 none;
      color: white;
      margin: 0 auto;
      max-width: 332px;
      padding: 0;
      position: relative;
      .icon {
        bottom: 0;
        font-size: 332px;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      p {
        font-size: 22px;
        letter-spacing: 0.23px;
        line-height: 1.5936363636;
        margin: 0;
        padding: 65px 16px 17px 25px;
      }
      span {
        display: block;
        font-size: 37px;
        font-weight: 600;
        letter-spacing: 0.66px;
        line-height: 0.9475675676;
      }
      small {
        display: block;
        font-size: 18px;
        margin-top: 14px;
        letter-spacing: 0.41px;
      }
    }
  }
  &.step3 {
    .content {
      p {
        padding: 97px 32px 51px 56px;
      }
      span {
        margin-top: 9px;
      }
      small {
        margin-top: 28px;
      }
    }
  }
  &.step4 {
    padding-top: 48px;
    .content {
      p {
        font-size: 24px;
        letter-spacing: 0.47px;
        line-height: 1.4608333333;
        padding: 90px 20px 50px 60px;
      }
      span {
        display: inline;
        font-size: 37px;
        font-weight: 400;
        letter-spacing: 0.66px;
        line-height: 0.9475675676;
        &.percentage {
          display: block;
          font-size: 65px;
          letter-spacing: 1.27px;
          line-height: 0.5393846154;
          margin: 0 0 12px;
        }
      }
      small {
        margin-top: 28px;
      }
    }
  }
`;
