import styled from "react-emotion";

export default styled("div")`
  border-top: 2px solid #e8e8e8;
  margin: 0 55px;
  padding: 39px 0;
  position: relative;
  text-align: center;
  &:first-child {
    border-top: 0 none;
    .title {
      max-width: 354px;
    }
  }
  .icon {
    color: #dddddd;
    left: 0;
    position: absolute;
    top: 39px;
    font-size: 78px;
  }
  .title {
    color: #dcdcdc;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.0416666667;
    margin: 0 auto;
    max-width: 513px;
  }
  .subtitle {
    color: #dcdcdc;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -1.4px;
    line-height: 1.265625;
    margin: 2px 0 0;
  }
  .form {
    margin: 48px auto 0;
    max-width: 215px;
    &-resume {
      color: #dcdcdc;
      font-size: 42px;
      margin: 38px 0 0;
      small {
        font-size: 20px;
      }
      &.percentage {
        small {
          font-size: 22px;
        }
      }
    }
    .note {
      font-size: 13px;
      font-weight: 600;
      margin: 0 0 26px;
      white-space: nowrap;
    }
  }
  &.current {
    .icon {
      color: #414141;
    }
    .title {
      color: #414141;
      font-weight: 700;
    }
    .subtitle {
      color: #414141;
      font-weight: 700;
    }
    .box {
      border: 2px solid #ad5091;
      padding: 32px 0 77px;
      margin: 0 -33px;
      position: relative;
      .icon {
        left: 29px;
      }
      .form-resume {
        color: #ad5091;
        font-size: 115.5px;
        font-weight: 200;
        letter-spacing: -7.84px;
        line-height: 0.3070995671;
        small {
          font-size: 49.5px;
          font-weight: 400;
          letter-spacing: -5.2px;
          vertical-align: top;
          position: relative;
          top: 8px;
          right: -18px;
        }
      }
      button {
        bottom: -21px;
        left: 50%;
        position: absolute;
        outline: solid white;
        outline-width: 12px;
        transform: translateX(-50%);
      }
    }
  }
`;
