import { ChangeEventHandler } from "react";
import { Pic } from "../svg/pic";
import { Wait } from "../svg/wait";

export const Member = ({
  isActive,
  onChange,
  value,
}: {
  isActive: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value: string;
}): JSX.Element => {
  const activeMember = <Pic></Pic>;
  const waitingMember = <Wait></Wait>;
  return (
    <div className="">
      {isActive ? activeMember : waitingMember}
      <input
        type="text"
        placeholder="名前を入力してください"
        onChange={onChange}
        value={value}
        className="w-full text-center"
      />
    </div>
  );
};

export default Member;
