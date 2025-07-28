import React from "react";

export default function Container({ children, className }) {
  return <div className={`w-11/12 mx-auto ${className}`}>{children}</div>;
}
