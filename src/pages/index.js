import React, { Component } from "react";
import Link from "gatsby-link";
import Content from "../components/Content";
import Steps from "../components/Steps";
import Messages from "../components/Messages";
import { requestGetSavings } from '../requests/savings';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      form: {
        debtAmount: "",
        annualInterestRate: "",
        monthlyMinimunPayment: ""
      },
      completed: false,
      scrollDirection: "",
      lastScrollPos: 0,
      isLoading: false,
      savings: 'xxxxx'
    };
    this.setDebtAmount = this.setDebtAmount.bind(this);
    this.setAnnualInterestRate = this.setAnnualInterestRate.bind(this);
    this.setMonthlyMinimunPayment = this.setMonthlyMinimunPayment.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.isCompleted = this.isCompleted.bind(this);
    this.goToStep = this.goToStep.bind(this);
    this.setNewStep = this.setNewStep.bind(this);
    this.onGetSavings = this.onGetSavings.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollIntoView();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.lastScrollPos > event.target.scrollingElement.scrollTop) {
      this.setState({
        scrollDirection: "top",
        lastScrollPos: event.target.scrollingElement.scrollTop
      });
    } else if (
      this.state.lastScrollPos < event.target.scrollingElement.scrollTop
    ) {
      this.setState({
        scrollDirection: "bottom",
        lastScrollPos: event.target.scrollingElement.scrollTop
      });
    }
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

  isCompleted(step) {
    if (step === 4) {
      this.setState({
        completed: true
      });
    }
  }

  goToStep(step) {
    const currentStep = document.getElementById("step" + step);
    currentStep.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  nextStep(event) {
    event.preventDefault();
    if (this.state.step === 3) {
      this.onGetSavings(this.state.step);
    } else{
      this.setState(
      state => ({
        step: state.step + 1
      }),
      () => {
        this.goToStep(this.state.step);
        this.isCompleted(this.state.step);
      }
    );
    }
  }

  setNewStep(newStep) {
    this.setState({
      step: newStep
    });
  }

  onGetSavings() {
    const { debtAmount, monthlyMinimunPayment, annualInterestRate } = this.state.form;
    this.setState({ isLoading: true });
    requestGetSavings({
      current: Number(debtAmount),
      minimum: Number(monthlyMinimunPayment),
      interest: annualInterestRate
    }).then(({ data: { data: { attributes } } }) => {
      const savings = attributes["total-savings"];
      this.setState(state => ({ step: state.step + 1, isLoading: false, savings }), () => {
          this.goToStep(this.state.step);
          this.isCompleted(this.state.step);
        });
    });
  }

  render() {
    const { step, form, scrollDirection, isLoading, savings } = this.state;
    const { isScrollingDown, isScrollingUp } = this.props;
    return (
      <div onScroll={this.handleScroll}>
        <Content title={"Savings Calculator"}>
          <Steps
            step={step}
            form={form}
            setDebtAmount={this.setDebtAmount}
            setAnnualInterestRate={this.setAnnualInterestRate}
            setMonthlyMinimunPayment={this.setMonthlyMinimunPayment}
            nextStep={this.nextStep}
            isCompleted={this.state.completed}
            goToStep={this.goToStep}
            setNewStep={this.setNewStep}
            scrollDirection={scrollDirection}
            isLoading={isLoading}
            savings={savings}
          />
        </Content>
        <Messages step={step} />
      </div>
    );
  }
}

export default IndexPage;
