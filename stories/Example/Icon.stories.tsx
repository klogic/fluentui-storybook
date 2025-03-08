import { tokens } from "@/.storybook/theme";
import { Icon as V8Icon } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import {
  CalendarLtrRegular,
  SearchFilled,
  WarningRegular,
} from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  iconRow: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    fontSize: tokens.fontSizeBase600,
  },
});

//#region Stories
export const Icon = () => {
  const styles = useStyles();
  return (
    <CompareGrid
      v8Component={
        <div className={styles.iconRow}>
          <V8Icon iconName="search" />
          <V8Icon iconName="calendar" />
          <V8Icon iconName="warning" />
        </div>
      }
      v9Component={
        <div className={styles.iconRow}>
          <SearchFilled />
          <CalendarLtrRegular />
          <WarningRegular />
        </div>
      }
    />
  );
};
//#endregion
