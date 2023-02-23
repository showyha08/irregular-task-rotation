import { ChangeEventHandler } from "react";
import { Pic } from "./svg/pic";
import { Wait } from "./svg/wait";

export const Person = ({
  isActive,
  onChange,
}: {
  isActive: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => {
  const activePerson = <Pic></Pic>;
  const waitingPerson = <Wait></Wait>;
  return (
    <div>
      {isActive ? activePerson : waitingPerson}
      <input
        type="text"
        placeholder="名前を入力してください"
        onChange={onChange}
      />
    </div>
  );
};

export default Person;
