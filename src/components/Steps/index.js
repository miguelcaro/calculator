import React from "react";
import Step from "../Step";
import Button from "../Button";
import Input from "../Input";
import Icon from "../Icon";
import { formatCurrency } from "../Utils";

const Steps = ({
  step,
  form,
  setDebtAmount,
  setAnnualInterestRate,
  setMonthlyMinimunPayment,
  nextStep
}) => {
  return (
    <div>
      <Step className={step === 1 && "current"}>
        <div className="header">
          <Icon iconClass={"cards"} />
          <h1 className="title">What is your current debt amount?</h1>
        </div>
        {step === 1 && (
          <div className="form">
            <Input
              type="currency"
              value={form.debtAmount}
              onChangeEvent={setDebtAmount}
            />
            <Button
              disabled={form.debtAmount === ""}
              onClickEvent={nextStep}
              text={"Next"}
            />
          </div>
        )}
        {step !== 1 &&
          form.debtAmount !== "" && (
            <p className="form-resume">
              <small>$</small> {formatCurrency(form.debtAmount)}
            </p>
          )}
      </Step>
      <Step className={step === 2 && "current"}>
        <div className="header">
          <Icon iconClass={"percentage"} />
          <h1 className="title">
            What is your estimated average annual interest rate?
          </h1>
        </div>
        {step === 2 && (
          <div className="form">
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
              onClickEvent={nextStep}
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
        <div className="header">
          <Icon iconClass={"payment"} />
          <h1 className="title">
            What’s your current monthly minimun payment?
          </h1>
        </div>
        {step === 3 && (
          <div className="form">
            <Input
              type="currency"
              value={form.monthlyMinimunPayment}
              onChangeEvent={setMonthlyMinimunPayment}
            />
            <Button
              disabled={form.monthlyMinimunPayment === ""}
              onClickEvent={nextStep}
              text={"Next"}
            />
          </div>
        )}
        {step !== 3 &&
          form.monthlyMinimunPayment !== "" && (
            <p className="form-resume">
              <small>$</small> {formatCurrency(form.monthlyMinimunPayment)}
            </p>
          )}
      </Step>
      <Step className={step === 4 && "current"}>
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
};

export default Steps;
