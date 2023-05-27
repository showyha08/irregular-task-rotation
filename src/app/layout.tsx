import UrlCopyButton from "components/atoms/urlCopyButton";
import ResetButton from "components/atoms/resetButton";
import "./globals.css";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "タスク当番表",
  description: "最大５人までのタスク当番を設定できる管理系Webツールです。",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className="font-sans">
        <header className="m-4 flex place-content-between border-b-2 p-2">
          <p className="stroke-4 text-xl font-bold antialiased drop-shadow-md">
            タスク当番くん
          </p>
          <div className="flex justify-between [&>*]:mr-4">
            <ResetButton></ResetButton>
            <UrlCopyButton></UrlCopyButton>
          </div>
        </header>
        <article>{children}</article>
        <footer className="absolute bottom-0">
          <aside>
            <pre>
              <small>(C) 2023 showyha08</small>
            </pre>
          </aside>
        </footer>
      </body>
    </html>
  );
}
