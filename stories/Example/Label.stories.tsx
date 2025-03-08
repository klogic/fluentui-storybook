import { tokens } from "@/.storybook/theme";
import {
  DirectionalHint as V8DirectionalHint,
  HoverCard as V8HoverCard,
  HoverCardType as V8HoverCardType,
  Label as V8Label,
} from "@fluentui/react";
import {
  makeStyles,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Label as V9Label,
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
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    columnGap: "0.25rem",
  },
  infoIcon: {
    alignItems: "center",
    backgroundColor: tokens.colorOrange,
    borderRadius: "50%",
    color: tokens.colorNeutralForegroundInverted,
    display: "flex",
    fontSize: "0.8rem",
    fontWeight: "bold",
    height: "1rem",
    justifyContent: "center",
    marginInlineStart: "0.25rem",
    width: "1rem",
    cursor: "help",
  },
  infoCard: {
    width: "560px",
    padding: "1rem 1rem",
  },
});

//#region Stories
export const Label = () => {
  const styles = useStyles();

  const renderInfoCard = () => {
    return (
      <div className={styles.infoCard}>
        {
          "Bitte reichen Sie die aktuellen Fachinformation oder Produktinformation (z.B. Etikett, Umverpackung) ein."
        }
      </div>
    );
  };

  return (
    <CompareGrid
      v8Component={
        <div className={styles.container}>
          <V8Label>{"Kühlkette"}</V8Label>
          <V8HoverCard
            type={V8HoverCardType.plain}
            instantOpenOnClick
            plainCardProps={{
              onRenderPlainCard: renderInfoCard,
              directionalHint: V8DirectionalHint.bottomCenter,
            }}
          >
            <div className={styles.infoIcon}>!</div>
          </V8HoverCard>
        </div>
      }
      v9Component={
        <Popover positioning="below-start">
          <PopoverTrigger>
            <div className={styles.container}>
              <V9Label size="large">{"Kühlkette"}</V9Label>
              <div className={styles.infoIcon}>!</div>
            </div>
          </PopoverTrigger>
          <PopoverSurface>{renderInfoCard()}</PopoverSurface>
        </Popover>
      }
    />
  );
};
//#endregion
