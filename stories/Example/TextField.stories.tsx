import { TextField as V8TextField } from "@fluentui/react";
import {
  Field,
  Input,
  tokens,
  Button as V9Button,
} from "@fluentui/react-components";
import { EyeFilled } from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

//#region Stories
export const TextField = () => {
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
        <Field
          label={"Aktuelles Passwort"}
          validationMessage={"Bitte Passwort eingeben"}
        >
          <Input
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
        </Field>
      }
    />
  );
};
//#endregion
