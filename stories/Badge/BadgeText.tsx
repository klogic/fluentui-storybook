import "./Badge.module.css";

import * as React from "react";

import {
  Badge,
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import type { BadgeProps } from "@fluentui/react-components";

/** Primary UI component for user interaction */
export interface BadgePropsText extends BadgeProps {
  text?: string;
}
export const BadgeTextComponent = ({ ...props }: BadgePropsText) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div>
        <Badge {...props}>{props.text}</Badge>
      </div>
    </FluentProvider>
  );
};
