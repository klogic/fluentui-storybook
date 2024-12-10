import { FC, ReactNode } from "react";

export const CompareGrid: FC<{v8Component: ReactNode, v9Component: ReactNode}> = ({v8Component, v9Component}) => {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div>
        <h3>@fluentui v8</h3>
        {v8Component}
      </div>
      <div>
        <h3>@fluentui v9</h3>
        {v9Component}
      </div>
    </div>
  );
}
