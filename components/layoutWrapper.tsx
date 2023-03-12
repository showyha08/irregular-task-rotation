import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export const LayoutWrapper = (props: Props) => {
  return (
    <div className="bg-gray-300">
      <div
        className="container mx-auto grid
        min-h-screen grid-rows-[auto,1fr,auto]"
      >
        <main className="bg-gray-100 px-4 text-gray-600">
          <div>{props.children}</div>
        </main>
      </div>
    </div>
  );
};
