"use client";

import ResetIcon from "components/svg/resetIcon";
import React from "react";

const ResetButton = (): JSX.Element => {
  return (
    <a className="flex" href="/">
      <ResetIcon></ResetIcon>Reset
    </a>
  );
};

export default ResetButton;
