import React, { Component } from "react";
import Link from "gatsby-link";
import Content from "../components/Content";
import Step from "../components/Step";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      form: {
        debtAmount: "",
        annualInterestRate: "",
        monthlyMinimunPayment: ""
      }
    };
    this.setDebtAmount = this.setDebtAmount.bind(this);
    this.setAnnualInterestRate = this.setAnnualInterestRate.bind(this);
    this.setMonthlyMinimunPayment = this.setMonthlyMinimunPayment.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
  }

  setDebtAmount(evt) {
    const re = /^[0-9\b]+$/;
    if (evt.target.value == "" || re.test(evt.target.value)) {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          debtAmount: evt.target.value
        }
      });
    }
  }

  setAnnualInterestRate(evt) {
    const re = /^(100|[1-9]?[0-9])$/;
    if (evt.target.value == "" || re.test(evt.target.value)) {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          annualInterestRate: evt.target.value
        }
      });
    }
  }

  setMonthlyMinimunPayment(evt) {
    const re = /^[0-9\b]+$/;
    if (evt.target.value == "" || re.test(evt.target.value)) {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          monthlyMinimunPayment: evt.target.value
        }
      });
    }
  }

  formatCurrency(val) {
    if (!val) return;
    return new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3
    }).format(val);
  }

  nextStep() {
    const _nextStep = this.state.step + 1;
    this.setState({
      step: _nextStep
    });
  }

  render() {
    const { step, form } = this.state;
    return (
      <div>
        <Content>
          <div className="tab">
            TALK TO A CERTIFIED DEBT SPECIALIST
            <span className="tab__number">1-800-XXX-XXXX</span>
          </div>
          <h2 className="title">Savings Calculator</h2>
          <div>
            <Step className={step === 1 && "current"}>
              <svg className="icon icon-cards">
                <use xlinkHref="#icon-cards" />
              </svg>
              <h1 className="title">What is your current debt amount?</h1>
              {step === 1 && (
                <div className="form">
                  <Input className="currency">
                    <input
                      type="text"
                      value={form.debtAmount}
                      onChange={this.setDebtAmount}
                    />
                  </Input>
                  <Button
                    disabled={form.debtAmount === ""}
                    onClick={this.nextStep}
                  >
                    Next
                  </Button>
                </div>
              )}
              {step !== 1 &&
                form.debtAmount !== "" && (
                  <p className="form-resume">
                    <small>$</small> {this.formatCurrency(form.debtAmount)}
                  </p>
                )}
            </Step>
            <Step className={step === 2 && "current"}>
              <svg className="icon icon-percentage">
                <use xlinkHref="#icon-percentage" />
              </svg>
              <h1 className="title">
                What is your estimated average annual interest rate?
              </h1>
              {step === 2 && (
                <div className="form">
                  <Input className="percentage">
                    <input
                      type="text"
                      value={form.annualInterestRate}
                      placeholder="22"
                      onChange={this.setAnnualInterestRate}
                    />
                  </Input>
                  <p className="note">
                    The national average is 22%
                    <br /> If yours is different please change above.
                  </p>
                  <Button
                    disabled={form.annualInterestRate === ""}
                    onClick={this.nextStep}
                  >
                    Next
                  </Button>
                </div>
              )}
              {step !== 2 &&
                form.annualInterestRate !== "" && (
                  <p className="form-resume percentage">
                    {form.annualInterestRate} <small>%</small>
                  </p>
                )}
            </Step>
            <Step className={step === 3 && "current"}>
              <svg className="icon icon-payment">
                <use xlinkHref="#icon-payment" />
              </svg>
              <h1 className="title">
                What’s your current monthly minimun payment?
              </h1>
              {step === 3 && (
                <div className="form">
                  <Input className="currency">
                    <input
                      type="text"
                      value={form.monthlyMinimunPayment}
                      onChange={this.setMonthlyMinimunPayment}
                    />
                  </Input>
                  <Button
                    disabled={form.monthlyMinimunPayment === ""}
                    onClick={this.nextStep}
                  >
                    Next
                  </Button>
                </div>
              )}
              {step !== 3 &&
                form.monthlyMinimunPayment !== "" && (
                  <p className="form-resume">
                    <small>$</small>{" "}
                    {this.formatCurrency(form.monthlyMinimunPayment)}
                  </p>
                )}
            </Step>
            <Step className={step === 4 && "current"}>
              <div className="box">
                <svg className="icon icon-moneybag">
                  <use xlinkHref="#icon-moneybag" />
                </svg>
                <h1 className="title">TOTAL SAVINGS</h1>
                <h2 className="subtitle">with Beyond{step === 4 && ":"}</h2>
                {step === 4 && (
                  <p className="form-resume">
                    <small>$</small> x,xxx.xx
                  </p>
                )}
                {step === 4 && <Button>Get Started Now</Button>}
              </div>
            </Step>
          </div>
        </Content>
        {step === 1 && (
          <Message className="step1">
            <div className="content">
              <p>
                We typically <br /> cur balances owed
                <span>in half</span>
                for our clients.
              </p>
            </div>
          </Message>
        )}
        {step === 2 && (
          <Message className="step2">
            <div className="content">
              <svg className="icon icon-quote-bubble">
                <use xlinkHref="#icon-quote-bubble" />
              </svg>
              <p>
                I was
                <span>worried at first, </span>
                but they were so helpful and
                <span>eased my mind</span>
                and helped me trhough <br /> the whole process.
                <br />
                <small>B.L.</small>
              </p>
            </div>
          </Message>
        )}
        {step === 3 && (
          <Message className="step3">
            <div className="content">
              <svg className="icon icon-quote-bubble">
                <use xlinkHref="#icon-quote-bubble" />
              </svg>
              <p>
                Because of
                <br />
                this company, I am
                <span>debt-free.</span>
                <small>G.P.</small>
              </p>
            </div>
          </Message>
        )}
        {step === 4 && (
          <Message className="step4">
            <div className="content">
              <h1>
                We typically <br /> cur balances owed
              </h1>
              <h2>
                in half
                <small>for our clients.</small>
              </h2>
            </div>
          </Message>
        )}
      </div>
    );
  }
}

export default IndexPage;
