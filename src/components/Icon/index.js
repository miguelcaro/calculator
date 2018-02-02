import React from "react";

const Icon = ({ iconClass, modifierClass }) => {
  return (
    <svg className={`icon icon-${iconClass} ${modifierClass}`}>
      <use xlinkHref={`#icon-${iconClass}`} />
    </svg>
  );
};

export default Icon;
