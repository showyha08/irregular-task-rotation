import { ChangeEventHandler } from "react";
import { Pic } from "../svg/pic";
import { Wait } from "../svg/wait";

export const Member = ({
  isActive,
  onChange,
}: {
  isActive: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => {
  const activeMember = <Pic></Pic>;
  const waitingMember = <Wait></Wait>;
  return (
    <div>
      {isActive ? activeMember : waitingMember}
      <input
        type="text"
        placeholder="名前を入力してください"
        onChange={onChange}
      />
    </div>
  );
};

export default Member;
