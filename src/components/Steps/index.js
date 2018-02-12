import React, { Component } from "react";
import Step from "../Step";
import Button from "../Button";
import Input from "../Input";
import Icon from "../Icon";
import { formatCurrency } from "../Utils";

class Steps extends Component {
  render() {
    const {
      step,
      form,
      setDebtAmount,
      setAnnualInterestRate,
      setMonthlyMinimunPayment,
      nextStep,
      isCompleted,
      goToStep,
      setNewStep,
      scrollDirection
    } = this.props;
    return (
      <div>
        <Step
          id="step1"
          className={step === 1 && "current"}
          isCompleted={isCompleted}
          currentStep={step}
          goToStep={goToStep}
          setNewStep={setNewStep}
          scrollDirection={scrollDirection}
        >
          <div className="header">
            <Icon iconClass={"cards"} />
            <div>
              <h1 className="title">What is your current debt amount?</h1>
              {step === 1 && (
                <form className="form" onSubmit={nextStep}>
                  <Input
                    type="currency"
                    value={form.debtAmount}
                    onChangeEvent={setDebtAmount}
                  />
                  <Button disabled={form.debtAmount === ""} text={"Next"} />
                </form>
              )}
              {step !== 1 &&
                form.debtAmount !== "" && (
                  <p className="form-resume">
                    <small>$</small> {formatCurrency(form.debtAmount)}
                  </p>
                )}
            </div>
          </div>
        </Step>
        <Step
          id="step2"
          className={step === 2 && "current"}
          isCompleted={isCompleted}
          currentStep={step}
          goToStep={goToStep}
          setNewStep={setNewStep}
          scrollDirection={scrollDirection}
        >
          <div className="header">
            <Icon iconClass={"percentage"} />
            <div>
              <h1 className="title">
                What is your estimated average annual interest rate?
              </h1>
              {step === 2 && (
                <form className="form" onSubmit={nextStep}>
                  <Input
                    type="percentage"
                    value={form.annualInterestRate}
                    placeholder="22"
                    onChangeEvent={setAnnualInterestRate}
                  />
                  <p className="note">
                    The national average is 22%
                    <br /> If yours is different please change above.
                  </p>
                  <Button
                    disabled={form.annualInterestRate === ""}
                    text={"Next"}
                  />
                </form>
              )}
              {step !== 2 &&
                form.annualInterestRate !== "" && (
                  <p className="form-resume percentage">
                    {form.annualInterestRate} <small>%</small>
                  </p>
                )}
            </div>
          </div>
        </Step>
        <Step
          id="step3"
          className={step === 3 && "current"}
          isCompleted={isCompleted}
          currentStep={step}
          goToStep={goToStep}
          setNewStep={setNewStep}
          scrollDirection={scrollDirection}
        >
          <div className="header">
            <Icon iconClass={"payment"} />
            <div>
              <h1 className="title">
                What’s your current monthly minimun payment?
              </h1>
              {step === 3 && (
                <form className="form" onSubmit={nextStep}>
                  <Input
                    type="currency"
                    value={form.monthlyMinimunPayment}
                    onChangeEvent={setMonthlyMinimunPayment}
                  />
                  <Button
                    disabled={form.monthlyMinimunPayment === ""}
                    text={"Next"}
                  />
                </form>
              )}
              {step !== 3 &&
                form.monthlyMinimunPayment !== "" && (
                  <p className="form-resume">
                    <small>$</small>{" "}
                    {formatCurrency(form.monthlyMinimunPayment)}
                  </p>
                )}
            </div>
          </div>
        </Step>
        <Step
          id="step4"
          className={step === 4 && "current"}
          isCompleted={isCompleted}
          currentStep={step}
          goToStep={goToStep}
          setNewStep={setNewStep}
          scrollDirection={scrollDirection}
        >
          <div className="box">
            <div className="header">
              <Icon iconClass={"moneybag"} />
              <h1 className="title">
                TOTAL SAVINGS
                <span className="subtitle">with Beyond{step === 4 && ":"}</span>
              </h1>
            </div>
            {step === 4 && (
              <p className="form-resume">
                <small>$</small> x,xxx.xx
              </p>
            )}
            {step === 4 && <Button text={"Get Started Now"} />}
          </div>
        </Step>
      </div>
    );
  }
}

export default Steps;
