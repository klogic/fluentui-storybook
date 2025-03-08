import { IComboBoxOption, ComboBox as V8ComboBox } from "@fluentui/react";
import {
  Field,
  Option,
  Combobox as V9ComboBox,
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
export const ComboBox = () => {
  const options: IComboBoxOption[] = [{ key: "77", text: "77" }];

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
        <Field
          label={"Kundennummer"}
          validationMessage={"Bitte Kundennummer eingeben"}
        >
          <V9ComboBox>
            {options.map((option) => (
              <Option key={option.key}>{option.text}</Option>
            ))}
          </V9ComboBox>
        </Field>
      }
    />
  );
};
//#endregion
