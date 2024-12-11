import {
  ActionButton as V8ActionButton,
  DatePicker as V8DatePicker,
  Label as V8Label,
} from "@fluentui/react";
import {
  makeStyles,
  tokens,
  Button as V9Button,
  Label as V9Label,
} from "@fluentui/react-components";
import { DatePicker as V9DatePicker } from "@fluentui/react-datepicker-compat";
import { DismissFilled } from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { format } from "date-fns/format";
import { de } from "date-fns/locale";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

const formatOptionalDate = (date?: Date) =>
  !date ? "" : format(date, "P", { locale: de });

//#region Stories
export const DatePicker = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8DatePicker
          formatDate={formatOptionalDate}
          textField={{
            onRenderLabel: () => <V8Label>{"Datum Patentablauf"}</V8Label>,
          }}
        />
      }
      v9Component={
        <div className={styles.container}>
          <V9Label id="date-label" size="large">
            {"Datum Patentablauf"}
          </V9Label>
          <V9DatePicker allowTextInput formatDate={formatOptionalDate} />
        </div>
      }
    />
  );
};

export const DatePickerClearIcon = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8DatePicker
          formatDate={formatOptionalDate}
          textField={{
            onRenderLabel: () => <V8Label>{"Datum Patentablauf"}</V8Label>,
            onRenderSuffix: () => (
              <V8ActionButton
                iconProps={{
                  iconName: "Clear",
                  title: "Feldinhalt Löschen",
                  styles: { root: { fontSize: 12, fontWeight: 600 } },
                }}
              />
            ),
            styles: {
              suffix: {
                border: "0px",
                padding: "0px 0px",
                background: "inherit",
                marginRight: "24px",
              },
            },
          }}
        />
      }
      v9Component={
        <div className={styles.container}>
          <V9Label id="date-label" size="large">
            {"Datum Patentablauf"}
          </V9Label>
          <V9DatePicker
            allowTextInput
            formatDate={formatOptionalDate}
            contentAfter={
              <V9Button
                iconPosition="before"
                appearance="transparent"
                icon={<DismissFilled color={tokens.colorBrandForeground1} />}
              />
            }
          />
        </div>
      }
    />
  );
};
//#endregion
