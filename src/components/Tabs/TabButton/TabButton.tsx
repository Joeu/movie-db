import React from "react";

const TabButton = (props: any) => {
  return (
    <button
      className={`tab-btn${props.selected ? "--selected" : "--default"}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default TabButton;
