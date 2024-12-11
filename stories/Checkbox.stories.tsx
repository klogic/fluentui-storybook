import { Checkbox as V8Checkbox } from "@fluentui/react";
import { Checkbox as V9Checkbox } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

//#region Stories
export const Checkbox = () => {
  return (
    <CompareGrid
      v8Component={
        <V8Checkbox label="Ich akzeptiere die Nutzungsbedingungen" />
      }
      v9Component={
        <V9Checkbox label="Ich akzeptiere die Nutzungsbedingungen" />
      }
    />
  );
};
//#endregion
