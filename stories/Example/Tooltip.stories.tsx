import { tokens } from "@/.storybook/theme";
import {
  DirectionalHint,
  TooltipDelay,
  DefaultButton as V8Button,
  TooltipHost as V8TooltipHost,
} from "@fluentui/react";
import {
  Button as V9Button,
  Tooltip as V9Tooltip,
} from "@fluentui/react-components";
import { AddFilled } from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

export const Tooltip = () => {
  const buttonColor = tokens.colorNeutralBackground2;
  const labelColor = tokens.colorNeutralForeground2;
  const label = "Neuaufnahme";
  const tooltipContent =
    "Die PZN befindet sich bereits in einem zurückgestellten Auftrag. Bitte schließen Sie diesen ab, bevor Sie die PZN erneut verwenden können";

  return (
    <CompareGrid
      v8Component={
        <V8TooltipHost
          content={tooltipContent}
          id="neuaufnahme-button"
          calloutProps={{ gapSpace: 0 }}
          delay={TooltipDelay.zero}
          directionalHint={DirectionalHint.bottomAutoEdge}
        >
          <V8Button
            disabled
            iconProps={{
              iconName: "circlePlus",
              styles: {
                root: {
                  color: labelColor,
                },
              },
            }}
            styles={{
              root: {
                border: "none",
                padding: "8px 10px",
                backgroundColor: buttonColor,
              },
              rootHovered: {
                backgroundColor: buttonColor,
              },
              rootPressed: {
                backgroundColor: buttonColor,
              },
              label: {
                color: labelColor,
                fontWeight: 600,
              },
            }}
          >
            {label}
          </V8Button>
        </V8TooltipHost>
      }
      v9Component={
        <V9Tooltip
          content={tooltipContent}
          relationship="description"
          positioning="below-start"
        >
          <V9Button disabled icon={<AddFilled />} iconPosition="before">
            {label}
          </V9Button>
        </V9Tooltip>
      }
    />
  );
};
