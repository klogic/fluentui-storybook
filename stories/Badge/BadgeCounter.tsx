import "./Badge.module.css";

import * as React from "react";

import { CounterBadge, FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import type { CounterBadgeProps } from "@fluentui/react-components";

export const BadgeCounterComponent = ({ ...props }: CounterBadgeProps) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div>
        <CounterBadge {...props}></CounterBadge>
      </div>
    </FluentProvider>
  );
};
