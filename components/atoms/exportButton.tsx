import React, { MouseEventHandler } from "react";

const ExportButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
  const button = (
    <button className="m-4 h-16 w-72 rounded-full bg-sky-400" onClick={onClick}>
      URLをコピーする
    </button>
  );

  return button;
};

export default ExportButton;
