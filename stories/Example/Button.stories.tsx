import {
  useTheme,
  DefaultButton as V8DefaultButton,
  PrimaryButton as V8PrimaryButton,
} from "@fluentui/react";
import {
  makeStyles,
  shorthands,
  Button as V9Button,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { tokens } from "../../.storybook/theme";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

//#region Stories
export const PrimaryButton = () => {
  return (
    <CompareGrid
      v8Component={<V8PrimaryButton text="Arzneimittelpreisrechner starten" />}
      v9Component={
        <V9Button appearance="primary">
          {"Arzneimittelpreisrechner starten"}
        </V9Button>
      }
    />
  );
};

export const SecondaryButton = () => {
  return (
    <CompareGrid
      v8Component={<V8DefaultButton text="Zurück" />}
      v9Component={<V9Button>{"Zurück"}</V9Button>}
    />
  );
};

const useStyles = makeStyles({
  destructive: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorRed,
    ...shorthands.borderColor(tokens.colorRed),
    ":hover": {
      color: tokens.colorRed,
      ...shorthands.borderColor(tokens.colorRed),
    },
    ":enabled": {
      color: tokens.colorRed,
      ...shorthands.borderColor(tokens.colorRed),
    },
  },
});

export const DestructiveButton = () => {
  const v8Theme = useTheme();
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8DefaultButton
          text="Auftrag Löschen"
          styles={{
            root: {
              fontSize: v8Theme.fonts.medium.fontSize,
              color: v8Theme.palette.red,
              borderColor: v8Theme.palette.red,
            },
            rootHovered: {
              color: v8Theme.palette.red,
            },
            rootPressed: {
              color: v8Theme.palette.red,
            },
          }}
        />
      }
      v9Component={
        <V9Button className={styles.destructive}>{"Auftrag Löschen"}</V9Button>
      }
    />
  );
};
//#endregion
