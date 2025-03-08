import "./Badge.module.css";

import * as React from "react";

import { Badge } from "@fluentui/react-components";
import type { BadgeProps } from "@fluentui/react-components";

/** Primary UI component for user interaction */
export interface BadgePropsText extends BadgeProps {
  text?: string;
}
export const BadgeIconComponent = ({ ...props }: BadgePropsText) => {
  return (
    <div>
      <Badge {...props}>{props.text}</Badge>
    </div>
  );
};
