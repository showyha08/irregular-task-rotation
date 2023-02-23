"use client";

import { ChangeButton } from "components/atoms/changeButton";
import PersonController from "components/molcule/personController";
import Person from "components/person";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Home() {
  const [personCount, setPersoncount] = useState(3);
  const [activePersonNo, setActivePersonNo] = useState(1);
  let ref = useRef("");
  // const peopleName = ["", "", "", "", ""];
  // const peopleNameRef = useRef(peopleName);
  function handleClick() {
    console.log(ref.current.toString);
  }
  const minCount = 1;
  const maxCount = 5;
  const canCountDown: () => boolean = () => {
    return minCount < personCount && personCount <= maxCount;
  };
  const canCountUp: () => boolean = () => {
    return minCount <= personCount && personCount < maxCount;
  };
  const activePersonBack: () => void = () => {
    setActivePersonNo(
      activePersonNo - 1 < minCount ? personCount : activePersonNo - 1
    );
  };
  const activePersonNext: () => void = () => {
    setActivePersonNo(
      activePersonNo + 1 > personCount ? minCount : activePersonNo + 1
    );
  };

  return (
    <main className="">
      <h1 className="bold p-10 text-center text-4xl">
        不定期タスクローテーション
      </h1>
      <div className="">
        <div className="flex justify-center">
          {[...Array(personCount)].map((_, x) => {
            return (
              <Person
                key={x}
                isActive={++x === activePersonNo}
                onChange={handleClick}
              ></Person>
            );
          })}
        </div>
        <div className="flex justify-center p-10">
          <PersonController
            onClickForMinus={() =>
              setPersoncount(() =>
                canCountDown() ? personCount - 1 : personCount
              )
            }
            onClickForPlus={() =>
              setPersoncount(() =>
                canCountUp() ? personCount + 1 : personCount
              )
            }
            disableClickForMinus={!canCountDown()}
            disableClickForPlus={!canCountUp()}
          >
            {personCount}
          </PersonController>
        </div>
        <div className="flex justify-center p-10">
          <ChangeButton
            color="back"
            onClick={() => activePersonBack()}
          ></ChangeButton>
          <ChangeButton
            color="next"
            onClick={() => activePersonNext()}
          ></ChangeButton>
        </div>
      </div>
    </main>
  );
}
