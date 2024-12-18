import { Toggle as V8Toggle } from "@fluentui/react";
import { makeStyles, Switch } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
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
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

//#region Stories
export const Toggle = () => {
  const styles = useStyles();

  const label = "PZN-Zuteilung verwenden";

  return (
    <CompareGrid
      v8Component={
        <div className={styles.container}>
          <p style={{ marginRight: 8 }}>{label}</p>
          <V8Toggle styles={{ root: { margin: "0px" } }} ariaLabel={label} />
        </div>
      }
      v9Component={
        <Switch label={label} labelPosition="before" aria-label={label} />
      }
    />
  );
};
//#region
