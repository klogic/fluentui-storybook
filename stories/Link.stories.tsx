import { Link as V8Link } from "@fluentui/react";
import { makeStyles, Link as V9Link } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  navigationLink: {
    listStyleType: "none",
    margin: "0 0.75rem",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",

    "@media(max-width: 1136px)": {
      margin: "0.5rem 0.75rem",
      display: "block",
    },
  },
});

const HOMEPAGE_URL = "https://bitglow.de/";

//#region Stories
export const Link = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <li className={styles.navigationLink}>
          <V8Link href={HOMEPAGE_URL}>{"Zurück zur Website"}</V8Link>
        </li>
      }
      v9Component={
        <li className={styles.navigationLink}>
          <V9Link href={HOMEPAGE_URL}>{"Zurück zur Website"}</V9Link>
        </li>
      }
    />
  );
};
//#endregion
