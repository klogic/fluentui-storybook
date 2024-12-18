import { TextField as V8TextField } from "@fluentui/react";
import {
  Input,
  Label,
  makeStyles,
  shorthands,
  Text,
  tokens,
  useId,
  Button as V9Button,
} from "@fluentui/react-components";
import { EyeFilled } from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  column: {
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: tokens.colorPaletteRedForeground1,
  },
  inputError: {
    ...shorthands.borderColor(tokens.colorPaletteRedForeground1),
  },
});

//#region Stories
export const TextField = () => {
  const styles = useStyles();
  const passwordFieldId = useId("password");
  const passwordFieldErrorId = useId("password-error");

  function handleKey(event: React.KeyboardEvent<HTMLInputElement>) {
    const capsLock = event.getModifierState("CapsLock");
    console.log("🚀 ~ handleKey ~ capsLock:", capsLock);
  }

  function handleBlur() {
    console.log("🚀 ~   function handleBlur()");
  }

  return (
    <CompareGrid
      v8Component={
        <V8TextField
          label="Aktuelles Passwort"
          type="password"
          onKeyDown={handleKey}
          onKeyUp={handleKey}
          onBlur={handleBlur}
          iconProps={{
            iconName: "redEye",
          }}
          canRevealPassword
          errorMessage={"Bitte Passwort eingeben"}
          styles={({ hasErrorMessage }) => ({
            fieldGroup: {
              borderColor: hasErrorMessage
                ? tokens.colorPaletteRedForeground1
                : undefined,
            },
            errorMessage: {
              color: hasErrorMessage
                ? tokens.colorPaletteRedForeground1
                : undefined,
            },
            icon: {
              paddingRight: 8,
              paddingBottom: 6,
              alignSelf: "flex-end",
              boxSizing: "border-box",
              position: "static",
            },
            revealButton: {
              marginRight: 0,
            },
          })}
        />
      }
      v9Component={
        <div className={styles.column}>
          <Label htmlFor={passwordFieldId} size="large">
            {"Aktuelles Passwort"}
          </Label>
          <Input
            id={passwordFieldId}
            className={styles.inputError}
            aria-describedby={passwordFieldErrorId}
            type="password"
            onKeyDown={handleKey}
            onKeyUp={handleKey}
            onBlur={handleBlur}
            contentAfter={
              <V9Button
                iconPosition="before"
                appearance="transparent"
                icon={<EyeFilled />}
              />
            }
          />
          <Text id={passwordFieldErrorId} className={styles.error}>
            {"Bitte Passwort eingeben"}
          </Text>
        </div>
      }
    />
  );
};
//#endregion
