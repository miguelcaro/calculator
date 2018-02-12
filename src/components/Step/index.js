import React from "react";
import styled from "react-emotion";
import { Watch } from "scrollmonitor-react";

const Comp = styled("div")`
  border-top: 2px solid #e8e8e8;
  padding: 39px 0;
  position: relative;
  text-align: center;
  @media (max-width: 900px) {
    margin: 0 25px;
  }
  @media (max-width: 820px) {
    margin: 0;
  }
  @media (max-width: 620px) {
    margin: 0;
    padding: 35px 0 29px;
  }
  &:first-child {
    @media (min-width: 620px) {
      border-top: 0 none;
    }
  }
  .header {
    @media (max-width: 620px) {
      align-items: flex-start;
      display: flex;
    }
  }
  .icon {
    color: #dddddd;
    left: 0;
    position: absolute;
    top: 39px;
    font-size: 68px;
    @media (max-width: 767px) {
      font-size: 59px;
    }
    @media (max-width: 620px) {
      margin-right: 24px;
      position: initial;
    }
  }
  .title {
    color: #dcdcdc;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.0416666667;
    margin: 0 auto;
    max-width: 354px;
    @media (max-width: 767px) {
      font-size: 25px;
    }
    @media (max-width: 620px) {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.075;
      margin: 0;
      max-width: 182px;
      text-align: left;
    }
  }
  .subtitle {
    color: #dcdcdc;
    display: block;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -1.4px;
    line-height: 1.265625;
    margin: 2px 0 0;
    @media (max-width: 620px) {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0;
      margin: 0;
    }
  }
  .form {
    margin: 48px auto 0;
    max-width: 215px;
    @media (max-width: 620px) {
      margin-bottom: -15px;
      margin-top: 31px;
      max-width: 163px;
    }
    &-resume {
      color: #dcdcdc;
      font-size: 42px;
      margin: 38px 0 0;
      @media (max-width: 620px) {
        font-size: 38px;
        font-weight: 200;
        line-height: 0.5657894737;
        letter-spacing: -2.1px;
        margin-top: 26px;
        text-align: left;
      }
      small {
        font-size: 20px;
      }
      &.percentage {
        small {
          font-size: 22px;
          @media (max-width: 620px) {
            font-size: 20px;
          }
        }
      }
    }
    .note {
      font-size: 13px;
      font-weight: 600;
      margin: 0 0 26px;
      white-space: nowrap;
      @media (max-width: 620px) {
        margin-left: -38px;
        margin-right: -38px;
      }
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
      @media (max-width: 620px) {
        font-weight: 600;
      }
    }
    .box {
      border: 2px solid #ad5091;
      padding: 32px 0 77px;
      position: relative;
      @media (max-width: 620px) {
        border-width: 1px;
        margin: 0 0 13px;
        padding: 24px 0 60px;
      }
      .icon {
        left: 29px;
        @media (max-width: 620px) {
          margin-left: 2px;
        }
      }
      .form-resume {
        color: #ad5091;
        font-size: 115.5px;
        font-weight: 200;
        letter-spacing: -7.84px;
        line-height: 0.3070995671;
        @media (max-width: 620px) {
          font-size: 70px;
          letter-spacing: -4.75px;
          line-height: 0.3071428571;
          text-align: center;
        }
        small {
          font-size: 49.5px;
          font-weight: 400;
          letter-spacing: -5.2px;
          vertical-align: top;
          position: relative;
          top: 8px;
          right: -18px;
          @media (max-width: 620px) {
            font-size: 30px;
            right: -8px;
            top: 4px;
          }
        }
      }
      button {
        bottom: -21px;
        left: 50%;
        position: absolute;
        outline: solid white;
        outline-width: 12px;
        transform: translateX(-50%);
        white-space: nowrap;
        @media (max-width: 620px) {
          bottom: -18px;
          outline-width: 6px;
        }
      }
    }
  }
`;

class Step extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const {
      isCompleted,
      isFullyInViewport,
      isAboveViewport,
      currentStep,
      goToStep,
      setNewStep,
      id,
      scrollDirection
    } = this.props;

    if( (isCompleted && isFullyInViewport) && (Number(id.slice(-1)) !== currentStep) ){
      if ((scrollDirection === "top" && currentStep > 1) && (Number(id.slice(-1)) < currentStep)) {
        goToStep(currentStep - 1);
        setNewStep(currentStep - 1)
      }
    }

    if( (isCompleted && isAboveViewport) && (Number(id.slice(-1)) !== currentStep) ){
      if ((scrollDirection === "bottom" && currentStep < 4) && (Number(id.slice(-1)) > currentStep)) {
        goToStep(currentStep + 1);
        setNewStep(currentStep + 1);
      }
    }
  }

  render() {
    return <Comp {...this.props}>{this.props.children}</Comp>;
  }
}

export default Watch(Step);
