import {
  DirectionalHint as V8DirectionalHint,
  HoverCard as V8HoverCard,
  HoverCardType as V8HoverCardType,
  Icon as V8Icon,
} from "@fluentui/react";
import {
  makeStyles,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import { InfoRegular } from "@fluentui/react-icons";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  icon: { cursor: "help" },
});

//#region Stories
export const HoverCard = () => {
  const styles = useStyles();

  const renderContent = () => {
    return (
      <div
        style={{
          width: "560px",
          padding: "1rem 1rem",
        }}
      >
        <h4>{"Was bedeutet Rolle?"}</h4>
        <p>
          {
            "Mit einer “Rolle” können Sie festlegen, welche Berechtigungen der Benutzer von Ihnen erhält."
          }
        </p>
      </div>
    );
  };

  return (
    <CompareGrid
      v8Component={
        <V8HoverCard
          type={V8HoverCardType.plain}
          instantOpenOnClick
          styles={{
            host: { cursor: "help" },
          }}
          plainCardProps={{
            onRenderPlainCard: renderContent,
            directionalHint: V8DirectionalHint.bottomRightEdge,
          }}
        >
          <V8Icon
            iconName="Info"
            styles={{
              root: {
                height: "1.5rem",
                width: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          />
        </V8HoverCard>
      }
      v9Component={
        <Popover positioning="below-start" openOnHover>
          <PopoverTrigger>
            <InfoRegular className={styles.icon} />
          </PopoverTrigger>
          <PopoverSurface>{renderContent()}</PopoverSurface>
        </Popover>
      }
    />
  );
};
//#endregion
