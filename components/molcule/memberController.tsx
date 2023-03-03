import Minus from "components/svg/minus";
import Plus from "components/svg/plus";
import React, { MouseEventHandler } from "react";

type ComponenProps = {
  children?: React.ReactNode;
  onClickForPlus?: MouseEventHandler<HTMLButtonElement>;
  onClickForMinus?: MouseEventHandler<HTMLButtonElement>;
  disableClickForPlus?: boolean;
  disableClickForMinus?: boolean;
};

const MemberController = ({
  children,
  onClickForPlus,
  onClickForMinus,
  disableClickForPlus,
  disableClickForMinus,
}: ComponenProps) => {
  return (
    <>
      <button
        onClick={onClickForMinus}
        className={disableClickForMinus ? "cursor-default opacity-40" : ""}
      >
        <Minus />
      </button>
      <div className="w-20 text-center text-5xl">{children}</div>
      <button
        onClick={onClickForPlus}
        className={disableClickForPlus ? "cursor-default opacity-40 " : ""}
      >
        <Plus />
      </button>
    </>
  );
};

export default MemberController;
