import "./Badge.module.css";

import * as React from "react";

import { Badge, CounterBadge, FluentProvider, teamsDarkTheme, teamsLightTheme } from "@fluentui/react-components";
import type { CounterBadgeProps } from "@fluentui/react-components";

export const BadgeCounterIconComponent = ({ ...props }: CounterBadgeProps) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div>
        <CounterBadge {...props}></CounterBadge>
      </div>
    </FluentProvider>
  );
};
