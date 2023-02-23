import { MouseEventHandler } from "react";

export const ChangeButton = ({
  color,
  onClick,
}: {
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
  const backButton = (
    <button
      className="m-4 h-16 w-72 rounded-full bg-blue-300"
      onClick={onClick}
    >
      前の担当者へ
    </button>
  );
  const nextButton = (
    <button
      className="m-4 h-16 w-72 rounded-full bg-green-300"
      onClick={onClick}
    >
      次の担当者へ
    </button>
  );
  return color === "next" ? nextButton : backButton;
};

export default ChangeButton;
