import { tokens } from "@/.storybook/theme";
import { Stack as V8Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  box1: {
    backgroundColor: tokens.colorBrandForeground1,
    width: "4rem",
    aspectRatio: 1,
  },
  box2: {
    backgroundColor: tokens.colorOrange,
    width: "4rem",
    aspectRatio: 1,
  },
  stack: {
    gap: "16px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "50%",
    height: "auto",
    boxSizing: "border-box",
    "> *": {
      textOverflow: "ellipsis",
    },
    "> :not(:first-child)": {
      marginTop: "0px",
    },
    "> *:not(.ms-StackItem)": {
      flexShrink: 1,
    },
  },
});

//#region Stories
export const Stack = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8Stack
          tokens={{ childrenGap: 16 }}
          horizontal
          horizontalAlign="end"
          styles={{
            root: {
              width: "50%",
            },
          }}
        >
          <div className={styles.box1} />
          <div className={styles.box2} />
        </V8Stack>
      }
      v9Component={
        <div className={styles.stack}>
          <div className={styles.box1} />
          <div className={styles.box2} />
        </div>
      }
    />
  );
};
//#endregion
