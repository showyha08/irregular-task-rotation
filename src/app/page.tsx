"use client";

import { ChangeButton } from "components/atoms/changeButton";
import MemberController from "components/molecules/memberController";
import Member from "components/atoms/member";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import type { ReactNode } from "react";
import React from "react";
import UrlCopyButton from "components/atoms/urlCopyButton";

export default function Home() {
  type Props = {
    children: ReactNode;
  };
  // メンバー許容人数設定
  const MIN_COUNT = 1;
  const MAX_COUNT = 5;
  const INIT_COUNT = 3;
  const isInRange = (x: number) => {
    return MIN_COUNT <= x && x <= MAX_COUNT;
  };

  // パラメータ設定
  const urlParams = {
    title: "title",
    position: "position",
    member: "member",
  };

  // パラメータから状態を取得
  const searchParams = useSearchParams();
  const title = searchParams.get(urlParams.title) || "タスク当番表";
  const position = searchParams.get(urlParams.position) || 1;
  const members: string[] = searchParams.get(urlParams.member)?.split(",") || [
    "",
    "",
    "",
  ];

  // メンバー名設定
  const [memberNames, setMemberNames] = useState(members);

  // 表示人数設定
  const [memberCount, setMemberCount] = useState(INIT_COUNT);

  // 当番表タイトル設定
  const [boardTitle, setBoardTitle] = useState(title);

  // クエリストリングでの位置指定
  const [activeMemberNo, setActiveMemberNo] = useState(
    (isInRange(Number(position)) && Number(position)) || 1
  );

  // urlを更新
  const updateUrl = () => {
    // 現在のURLを取得
    const currentUrl = window.location.href;

    // 現在のqueryパラメータを取得
    const searchParams = new URLSearchParams(window.location.search);

    // 新しいqueryパラメータを設定
    searchParams.set(urlParams.title, boardTitle);
    searchParams.set(urlParams.member, memberNames.join(","));
    searchParams.set(urlParams.position, activeMemberNo.toString());

    // 新しいURLを作成
    const newUrl = `${currentUrl.split("?")[0]}?${searchParams.toString()}`;

    // 新しいURLに変更
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const canCountDown: () => boolean = () => {
    return MIN_COUNT < memberCount && memberCount <= MAX_COUNT;
  };
  const canCountUp: () => boolean = () => {
    return MIN_COUNT <= memberCount && memberCount < MAX_COUNT;
  };
  const activeMemberBack: () => void = () => {
    setActiveMemberNo(
      activeMemberNo - 1 < MIN_COUNT ? memberCount : activeMemberNo - 1
    );
  };
  const activeMemberNext: () => void = () => {
    setActiveMemberNo(
      activeMemberNo + 1 > memberCount ? MIN_COUNT : activeMemberNo + 1
    );
  };

  // メンバー人数より担当者番号が大きい場合は担当者番号を更新する
  const fixActiveMember: () => void = () => {
    console.log(activeMemberNo);
    console.log(memberCount);
    setActiveMemberNo(
      activeMemberNo > memberCount ? memberCount : activeMemberNo
    );
  };

  const boardTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };

  const memberNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const memberPosition = Number(e.target.id);
    const newMemberNames: string[] = [...memberNames].map((name, index) => {
      return index === memberPosition ? e.target.value : name;
    });
    setMemberNames(newMemberNames);
  };

  // queryStringsで利用するパラメータが更新された場合は副作用によりURLを更新する
  useEffect(() => {
    fixActiveMember();
    updateUrl();
    // updateUrlは更新されないので、eslintのルールを無効化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberCount, memberNames, boardTitle, activeMemberNo]);

  return (
    <main className="">
      <section>
        <h1 className="bold p-10 text-center text-4xl">
          <input
            type="text"
            value={boardTitle}
            onChange={boardTitleChangeHandler}
            className="text-center"
          />
        </h1>
        <div>
          <div className="flex justify-center">
            {[...Array(memberCount)].map((_, x) => {
              return (
                <Member
                  id={x.toString()}
                  key={x}
                  value={memberNames[x]}
                  isActive={++x === activeMemberNo}
                  onChange={memberNameChangeHandler}
                ></Member>
              );
            })}
          </div>
          <div className="flex justify-center p-10">
            <MemberController
              onClickForMinus={() =>
                setMemberCount(() =>
                  canCountDown() ? memberCount - 1 : memberCount
                )
              }
              onClickForPlus={() =>
                setMemberCount(() =>
                  canCountUp() ? memberCount + 1 : memberCount
                )
              }
              disableClickForMinus={!canCountDown()}
              disableClickForPlus={!canCountUp()}
            >
              {memberCount}
            </MemberController>
          </div>
          <div className="flex justify-center p-10">
            <ChangeButton
              color="back"
              onClick={() => activeMemberBack()}
            ></ChangeButton>
            <ChangeButton
              color="next"
              onClick={() => activeMemberNext()}
            ></ChangeButton>
          </div>
        </div>
      </section>
    </main>
  );
}
