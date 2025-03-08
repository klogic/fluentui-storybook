import "./Badge.module.css";

import * as React from "react";

import { Badge } from "@fluentui/react-components";
import type { BadgeProps } from "@fluentui/react-components";

/** Primary UI component for user interaction */
export const BadgeShapeComponent = ({ ...props }: BadgeProps) => {
  return (
    <div>
      <Badge {...props}></Badge>
    </div>
  );
};
