import { tokens } from "@/.storybook/theme";
import { Pivot as V8Pivot, PivotItem as V8PivotItem } from "@fluentui/react";
import {
  makeStyles,
  TabList as V9Pivot,
  Tab as V9PivotItem,
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
  pivotItem: {
    // Entfernt die Linie unter dem fokussierten PivotItem
    "&:before, &:after": {
      display: "none",
      margin: 0,
    },
  },
  text: {
    lineHeight: tokens.lineHeightBase600,
    fontSize: tokens.fontSizeBase600,
    color: tokens.colorBrandForeground1,
    ":hover, :active": {
      textDecoration: "underline",
      textDecorationColor: tokens.colorBrandForeground1,
    },
  },
});

//#region Stories
export const Pivot = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8Pivot
          styles={{
            link: {
              fontSize: "1.875rem",
              fontWeight: 300,
              lineHeight: "1.5em",
              marginRight: "2rem",
              padding: 0,
              textAlign: "left",
              ":hover, :active": {
                // Entfernt die Hintergrundfarbe beim Hovern
                backgroundColor: "transparent",
              },
              // Entfernt das Padding um die PivotItem-Elemente herum
              "&:after": {
                content: "none",
              },
            },
            linkIsSelected: {
              color: tokens.colorBrandForeground1,
              fontWeight: 500,
              // Bestimmt die Text-Farbe, wenn der Hover-Effekt aktiv ist
              ":hover, :active": {
                color: tokens.colorBrandForeground1,
              },
              // Entfernt die Linie unter dem fokussierten PivotItem
              "&:before": {
                display: "none",
                margin: 0,
              },
            },
            text: {
              color: tokens.colorBrandForeground1,
              ":hover, :active": {
                textDecoration: "underline",
                textDecorationColor: tokens.colorBrandForeground2,
                color: tokens.colorBrandForeground1,
              },
            },
          }}
        >
          <V8PivotItem
            headerText={"Veröffentlichte Artikel"}
            itemKey={"artikel"}
          />
          <V8PivotItem headerText={"PZN-Zuteilungen"} itemKey={"zuteilungen"} />
        </V8Pivot>
      }
      v9Component={
        <V9Pivot>
          <V9PivotItem
            value={"artikel"}
            className={styles.pivotItem}
            content={{
              // Note: Setting the color in the class is overridden automatically by Fluent UI
              style: { color: tokens.colorBrandForeground1 },
              className: styles.text,
            }}
          >
            {"Veröffentlichte Artikel"}
          </V9PivotItem>
          <V9PivotItem
            value={"zuteilungen"}
            className={styles.pivotItem}
            content={{
              // Note: Setting the color in the class is overridden automatically by Fluent UI
              style: { color: tokens.colorBrandForeground1 },
              className: styles.text,
            }}
          >
            {"PZN-Zuteilungen"}
          </V9PivotItem>
        </V9Pivot>
      }
    />
  );
};
//#endregion
