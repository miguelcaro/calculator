import React from "react";
import Icon from "../Icon";
import Message from "../Message";

const Messages = ({ step }) => {
  return (
    <div>
      {step === 1 && (
        <Message className="step1">
          <div className="content">
            <Icon iconClass={"scissors"} />

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
            <Icon iconClass={"quote-bubble"} />
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
            <Icon iconClass={"quote-bubble"} />
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
            <Icon iconClass={"stars-bubble"} />
            <p>
              <span className="percentage">95%</span>
              of our clients report
              <br />
              a <span>positive</span>
              <br />
              <span>experience</span>
              <br />
              with Beyond.
            </p>
          </div>
        </Message>
      )}
    </div>
  );
};

export default Messages;
