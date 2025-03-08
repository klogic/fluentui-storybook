import {
  IChoiceGroupOption,
  ChoiceGroup as V8ChoiceGroup,
  Text as V8Text,
} from "@fluentui/react";
import {
  makeStyles,
  Radio,
  RadioGroup,
  Text as V9Text,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  radio: {
    marginTop: "0.5rem",
    columnGap: "1rem",
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

//#region Stories
export const ChoiceGroup = () => {
  const styles = useStyles();

  const choices: IChoiceGroupOption[] = [
    { key: "All", text: "Alle Formate" },
    { key: "Excel", text: "Excel" },
    { key: "Pdf", text: "PDF" },
  ];

  return (
    <CompareGrid
      v8Component={
        <>
          <V8Text block style={{ fontWeight: 600 }}>
            {"Auftragsbestätigung erhalten"}
          </V8Text>
          <V8ChoiceGroup
            options={choices}
            styles={{
              root: {
                marginTop: "0.5rem",
              },
              label: {
                display: "inline",
              },
              flexContainer: {
                columnGap: "1rem",
                display: "inline-flex",
                flexDirection: "row",
                flexWrap: "wrap",
              },
            }}
          />
        </>
      }
      v9Component={
        <>
          <V9Text block style={{ fontWeight: 600 }}>
            {"Auftragsbestätigung erhalten"}
          </V9Text>
          <RadioGroup className={styles.radio}>
            {choices.map((choice) => (
              <Radio key={choice.key} value={choice.key} label={choice.text} />
            ))}
          </RadioGroup>
        </>
      }
    />
  );
};
//#endregion
