import styled from "react-emotion";

export default styled("div")`
  background-color: #2c87c8;
  border: 1px solid #dfdfdf;
  margin-bottom: 27px;
  padding: 29px 26px 27px 28px;
  @media (max-width: 620px) {
    border: 0 none;
    margin: 0 -21px;
  }
  .content {
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 13px;
    color: #2b86c7;
    padding: 36px 0 39px;
    text-align: center;
  }
  &.step1 {
    @media (max-width: 620px) {
      padding: 25px 25px 25px 27px;
    }
    .content {
      padding-top: 19px;
      @media (max-width: 620px) {
        padding: 28px 0 40px;
      }
    }
    .icon {
      font-size: 127px;
      margin-bottom: 19px;
      @media (max-width: 620px) {
        font-size: 105px;
      }
    }
    p {
      font-size: 26px;
      font-weight: 600;
      letter-spacing: -0.13px;
      line-height: 0.8269230769;
      margin: 0;
      @media (max-width: 620px) {
        font-size: 20px;
        letter-spacing: -0.1px;
        line-height: 1.075;
      }
    }
    span {
      display: block;
      font-size: 42px;
      font-weight: 600;
      letter-spacing: 0.88px;
      line-height: 0.5119047619;
      margin: 31px 0 6px;
      @media (max-width: 620px) {
        font-size: 35px;
        letter-spacing: 0.73px;
        line-height: 0.6142857143;
        margin: 18px 0 3px;
      }
    }
  }
  &.step2,
  &.step3,
  &.step4 {
    border-radius: 12px;
    padding: 31px 26px 67px 28px;
    @media (max-width: 620px) {
      border-radius: 0;
      padding: 45px 22px 38px 19px;
    }
    .content {
      background-color: inherit;
      border: 0 none;
      color: white;
      margin: 0 auto;
      max-width: 332px;
      padding: 0;
      position: relative;
      @media (max-width: 620px) {
        max-width: 279px;
      }
      .icon {
        bottom: 0;
        font-size: 332px;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        @media (max-width: 620px) {
          font-size: 279px;
        }
      }
      p {
        font-size: 22px;
        letter-spacing: 0.23px;
        line-height: 1.5936363636;
        margin: 0;
        padding: 65px 16px 17px 25px;
        @media (max-width: 620px) {
          font-size: 21px;
          letter-spacing: 0.47px;
          line-height: 1.380952381;
          padding: 50px 19px 15px 22px;
        }
      }
      span {
        display: block;
        font-size: 37px;
        font-weight: 600;
        letter-spacing: 0.66px;
        line-height: 0.9475675676;
        @media (max-width: 620px) {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: 0.47px;
          line-height: 1.380952381;
          &.inline {
            display: inline;
            padding: 0 6px;
          }
        }
      }
      small {
        display: block;
        font-size: 18px;
        margin-top: 14px;
        letter-spacing: 0.41px;
        @media (max-width: 620px) {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.36px;
          line-height: 1.8125;
          margin-top: 13px;
        }
      }
    }
  }
  &.step3 {
    .content {
      p {
        padding: 97px 32px 51px 56px;
        @media (max-width: 620px) {
          padding: 86px 41px 52px 53px;
        }
      }
      span {
        margin-top: 3px;
        @media (max-width: 620px) {
          font-size: 35px;
          foont-weight: 600;
          line-height: 1;
          letter-spacing: -0.02px;
        }
      }
      small {
        margin-top: 14px;
      }
    }
  }
  &.step4 {
    padding-top: 48px;
    @media (max-width: 620px) {
      padding: 25px 26px;
    }
    .content {
      @media (max-width: 620px) {
        background-color: white;
        color: #2b86c7;
        padding: 38px 46px 53px;
      }
      p {
        font-size: 24px;
        letter-spacing: 0.47px;
        line-height: 1.4608333333;
        padding: 90px 20px 50px 60px;
        @media (max-width: 620px) {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.1px;
          line-height: 1.075;
          padding: 0;
        }
      }
      span {
        display: inline;
        font-size: 37px;
        font-weight: 400;
        letter-spacing: 0.66px;
        line-height: 0.9475675676;
        @media (max-width: 620px) {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.58px;
          line-height: 0.7678571429;
        }
        &.percentage {
          display: block;
          font-size: 65px;
          letter-spacing: 1.27px;
          line-height: 0.5393846154;
          margin: 0 0 12px;
          @media (max-width: 620px) {
            font-size: 55px;
            font-weight: 300;
            letter-spacing: -0.28px;
            line-height: 0.3909090909;
          }
        }
      }
      small {
        margin-top: 28px;
      }
    }
    .icon {
      @media (max-width: 620px) {
        display: none;
      }
      &.icon-mobile {
        font-size: 16px;
        display: none;
        @media (max-width: 620px) {
          display: block;
          margin: 0 auto 70px;
          position: initial;
        }
      }
    }
  }
`;
