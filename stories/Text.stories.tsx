import { Text as V8Text } from "@fluentui/react";
import { makeStyles, Text as V9Text } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  text: {
    marginTop: "1rem",
    paddingBottom: "0.5rem",
  },
});

//#region Stories
export const Text = () => {
  const styles = useStyles();
  const message = "272 Suchergebnisse von insgesamt 1000 werden angezeigt";

  return (
    <CompareGrid
      v8Component={
        <V8Text block variant="small" className={styles.text}>
          {message}
        </V8Text>
      }
      v9Component={
        <V9Text block size={200} className={styles.text}>
          {message}
        </V9Text>
      }
    />
  );
};
//#endregion
