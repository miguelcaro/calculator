import React, { Component } from "react";
import Link from "gatsby-link";
import Content from "../components/Content";
import Steps from "../components/Steps";
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
          <Steps
            step={step}
            form={form}
            setDebtAmount={this.setDebtAmount}
            setAnnualInterestRate={this.setAnnualInterestRate}
            setMonthlyMinimunPayment={this.setMonthlyMinimunPayment}
            nextStep={this.nextStep}
          />
        </Content>
        <Messages step={step} />
      </div>
    );
  }
}

export default IndexPage;
