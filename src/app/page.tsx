"use client";

import { ChangeButton } from "components/atoms/changeButton";
import MemberController from "components/molcule/memberController";
import Member from "components/atoms/member";
import { useRef, useState } from "react";
import ExportButton from "components/atoms/exportButton";
import { useSearchParams } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabaseClient";
import type { ReactNode } from "react";
import React from "react";

export default function Home() {
  type Props = {
    children: ReactNode;
  };
  const Container = (props: Props) => {
    const { user } = Auth.useUser();
    // ログイン済み
    return user ? (
      <div className="mx-2 my-4 flex justify-end">
        <button onClick={() => supabase.auth.signOut()}>ログアウト</button>
      </div>
    ) : (
      // 未ログイン
      <>props.children</>
    );
  };
  const App = () => (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
    />
  );

  // メンバー許容人数設定
  const MIN_COUNT = 1;
  const MAX_COUNT = 5;
  const INIT_COUNT = 3;
  const isInRange = (x: number) => {
    return MIN_COUNT <= x && x <= MAX_COUNT;
  };

  // パラメータから状態を取得
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "タスク当番表(変更可能)";
  const position = searchParams.get("position");
  const members: string[] = searchParams.get("member")?.split(",") || [];
  const [memberCount, setMembercount] = useState(INIT_COUNT);

  // クエリストリングでの位置指定
  const [activeMemberNo, setActiveMemberNo] = useState(
    (isInRange(Number(position)) && Number(position)) || 1
  );
  let ref = useRef("");

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

  return (
    <main className="">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container>
          <div className="flex justify-center pt-8">
            <div className="w-full sm:w-96">
              <App></App>
            </div>
          </div>
        </Container>
      </Auth.UserContextProvider>
      {/* <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {supabase && !session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["github"]}
          />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div> */}
      <h1 className="bold p-10 text-center text-4xl">
        <input type="text" value={title} className="text-center" />
      </h1>
      <div className="">
        <div className="flex justify-center">
          {[...Array(memberCount)].map((_, x) => {
            return (
              <Member
                key={x}
                value={members[x]}
                isActive={++x === activeMemberNo}
              ></Member>
            );
          })}
        </div>
        <div className="flex justify-center p-10">
          <MemberController
            onClickForMinus={() =>
              setMembercount(() =>
                canCountDown() ? memberCount - 1 : memberCount
              )
            }
            onClickForPlus={() =>
              setMembercount(() =>
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
        <div className="grid place-items-center p-10">
          <ExportButton onClick={() => activeMemberNext()}></ExportButton>
        </div>
      </div>
    </main>
  );
}

// const Home = () => {
//   return (
//     <LayoutWrapper>
// <Auth.UserContextProvider supabaseClient={supabase}>
//   <Container>
//     <div className="flex justify-center pt-8">
//       <div className="w-full sm:w-96">
//         <App></App>
//       </div>
//     </div>
//   </Container>
// </Auth.UserContextProvider>
//     </LayoutWrapper>
//   );
// };
// export default Home;
