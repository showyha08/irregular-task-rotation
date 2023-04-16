import { ChangeEventHandler } from "react";
import { Pic } from "../svg/pic";
import { Wait } from "../svg/wait";

interface Props {
  id: string;
  isActive: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const Member = ({
  id,
  isActive,
  onChange,
  value,
}: Props): JSX.Element => {
  const activeMember = <Pic></Pic>;
  const waitingMember = <Wait></Wait>;
  return (
    <div className="">
      {isActive ? activeMember : waitingMember}
      <input
        id={id}
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
