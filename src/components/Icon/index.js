import React from "react";

const Icon = ({iconClass}) => {
  return (
    <svg className={`icon icon-${iconClass}`}>
      <use xlinkHref={`#icon-${iconClass}`} />
    </svg>
  );
};

export default Icon;
