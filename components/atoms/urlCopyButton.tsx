"use client";

import LinkIcon from "components/svg/linkIcon";
import React from "react";

const UrlCopyButton = (): JSX.Element => {
  const copyUrlForClipboard = () => {
    navigator.clipboard.writeText(location.href);
  };

  return (
    <button onClick={copyUrlForClipboard} className="flex">
      <LinkIcon></LinkIcon>URLをコピーする
    </button>
  );
};

export default UrlCopyButton;
