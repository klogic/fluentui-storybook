import { tokens } from "@/.storybook/theme";
import { IComboBoxOption, ComboBox as V8ComboBox } from "@fluentui/react";
import {
  Label,
  makeStyles,
  Option,
  shorthands,
  Text,
  Combobox as V9ComboBox,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  column: { display: "flex", flexDirection: "column" },
  error: {
    color: tokens.colorPaletteRedForeground1,
  },
  comboboxError: {
    ...shorthands.borderColor(tokens.colorPaletteRedForeground1),
  },
});

//#region Stories
export const ComboBox = () => {
  const options: IComboBoxOption[] = [{ key: "77", text: "77" }];
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8ComboBox
          label="Kundennummer"
          options={options}
          allowFreeform
          errorMessage="Bitte Kundennummer eingeben"
        />
      }
      v9Component={
        <div className={styles.column}>
          <Label size="large" id="customer-number">
            {"Kundennummer"}
          </Label>
          <V9ComboBox
            aria-labelledby="customer-number"
            aria-describedby="error-message"
            className={styles.comboboxError}
          >
            {options.map((option) => (
              <Option key={option.key}>{option.text}</Option>
            ))}
          </V9ComboBox>
          <Text id="error-message" className={styles.error}>
            {"Bitte Kundennummer eingeben"}
          </Text>
        </div>
      }
    />
  );
};
//#endregion
