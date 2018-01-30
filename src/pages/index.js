import React, { Component } from "react";
import Link from "gatsby-link";
import Content from "../components/Content";
import Step from "../components/Step";
import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "../components/Icon";
import Messages from "../components/Messages";

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
        <Content
          title={"Savings Calculator"}
          tabText={"TALK TO A CERTIFIED DEBT SPECIALIST"}
          tabPhoneNumber={"1-800-XXX-XXXX"}
        >
          <div>
            <Step className={step === 1 && "current"}>
              <Icon iconClass={"cards"} />
              <h1 className="title">What is your current debt amount?</h1>
              {step === 1 && (
                <div className="form">
                  <Input
                    type="currency"
                    value={form.debtAmount}
                    onChangeEvent={this.setDebtAmount}
                  />
                  <Button
                    disabled={form.debtAmount === ""}
                    onClickEvent={this.nextStep}
                    text={"Next"}
                  />
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
              <Icon iconClass={"percentage"} />
              <h1 className="title">
                What is your estimated average annual interest rate?
              </h1>
              {step === 2 && (
                <div className="form">
                  <Input
                    type="percentage"
                    value={form.annualInterestRate}
                    placeholder="22"
                    onChangeEvent={this.setAnnualInterestRate}
                  />
                  <p className="note">
                    The national average is 22%
                    <br /> If yours is different please change above.
                  </p>
                  <Button
                    disabled={form.annualInterestRate === ""}
                    onClickEvent={this.nextStep}
                    text={"Next"}
                  />
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
              <Icon iconClass={"payment"} />
              <h1 className="title">
                What’s your current monthly minimun payment?
              </h1>
              {step === 3 && (
                <div className="form">
                  <Input
                    type="currency"
                    value={form.monthlyMinimunPayment}
                    onChangeEvent={this.setMonthlyMinimunPayment}
                  />
                  <Button
                    disabled={form.monthlyMinimunPayment === ""}
                    onClickEvent={this.nextStep}
                    text={"Next"}
                  />
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
                <Icon iconClass={"moneybag"} />
                <h1 className="title">TOTAL SAVINGS</h1>
                <h2 className="subtitle">with Beyond{step === 4 && ":"}</h2>
                {step === 4 && (
                  <p className="form-resume">
                    <small>$</small> x,xxx.xx
                  </p>
                )}
                {step === 4 && <Button text={"Get Started Now"} />}
              </div>
            </Step>
          </div>
        </Content>
        <Messages step={step} />
      </div>
    );
  }
}

export default IndexPage;
