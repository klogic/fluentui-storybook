import {
  MessageBar as V8MessageBar,
  MessageBarType as V8MessageBarType,
} from "@fluentui/react";
import {
  MessageBarBody,
  MessageBarTitle,
  MessageBar as V9MessageBar,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

//#region Stories
export const MessageBar = () => {
  const message =
    "Für Ihren Auftrag wurde der Meldeschluss überschritten. Bitte legen Sie eine neue Veröffentlichung fest.";

  return (
    <CompareGrid
      v8Component={
        <V8MessageBar messageBarType={V8MessageBarType.error}>
          {message}
        </V8MessageBar>
      }
      v9Component={
        <V9MessageBar intent="error">
          <MessageBarBody>
            <MessageBarTitle>{message}</MessageBarTitle>
          </MessageBarBody>
        </V9MessageBar>
      }
    />
  );
};
//#endregion
