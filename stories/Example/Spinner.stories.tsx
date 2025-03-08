import {
  Spinner as V8Spinner,
  SpinnerSize as V8SpinnerSize,
} from "@fluentui/react";
import { Spinner as V9Spinner } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

//#region Stories
export const Spinner = () => {
  return (
    <CompareGrid
      v8Component={<V8Spinner size={V8SpinnerSize.large} />}
      v9Component={<V9Spinner />}
    />
  );
};
//#endregion
