import type { Meta, StoryObj } from "@storybook/react";

import { BadgePropsText, BadgeTextComponent } from "./BadgeText";
import { CounterBadge, CounterBadgeProps } from "@fluentui/react-components";
import {
  CalendarLtrRegular,
  SearchFilled,
  Accessibility16Regular,
  Accessibility20Regular,
  Accessibility24Regular,
  Accessibility28Regular,
  Accessibility32Regular,
  Accessibility48Regular,
} from "@fluentui/react-icons";
import { BadgeCounterComponent } from "./BadgeCounter";
("@fluentui/react-icons");
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "FluentUI/Badge/CounterBadge/BadgeCounterNumber",
  component: BadgeCounterComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          "https://react.fluentui.dev/?path=/docs/components-badge-counter-badge--docs",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: [
        "tiny",
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
      ],
      description: "A Badge can be on of several preset sizes.",
    },
    color: {
      control: "select",
      options: ["brand", "danger", "important", "informative"],
      description: "Semantic colors for a counter badge",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
    shape: {
      control: "select",
      options: ["rounded", "circular"],
      description: "A Badge can be circular or rounded",
      table: {
        defaultValue: { summary: "circular" },
      },
    },
    appearance: {
      table: {
        defaultValue: { summary: "filled" },
      },
      control: "select",
      options: ["filled", "ghost"],
      description:
        "A Badge can have different appearances that emphasize certain parts of it",
    },
    count: {
      table: {
        defaultValue: { summary: "0" },
      },
    },
    dot: {
      table: {
        defaultValue: { summary: "false" },
      },
      description: "If a dot should be displayed without the count",
    },
    overflowCount: {
      table: {
        defaultValue: { summary: "99" },
      },
      description: "Max number to be displayed",
    },
    showZero: {
      table: {
        defaultValue: { summary: "false" },
      },
      description: "If the badge should be shown when count is 0",
    },
  },
  args: {
    size: "medium",
    color: "brand",
    shape: "circular",
    appearance: "filled",
    count: 0,
    dot: false,
    showZero: false,
  },
} satisfies Meta<CounterBadgeProps>;

export const Default: Story = {
  args: {
    size: "small",
    appearance: "filled",
    color: "brand",
    shape: "circular",
    count: 0,
    overflowCount: 99,
  },
};
export const Tiny = {
  args: {
    size: "tiny",
    count: 0,
    showZero: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
    count: 0,
    showZero: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    count: 0,
    showZero: true,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    count: 0,
    showZero: true,
  },
};
export const Large: Story = {
  args: {
    size: "large",
    count: 0,
    showZero: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
    count: 0,
    showZero: true,
  },
};

export const CounterSize = () => {
  return (
    <div>
      <CounterBadge count={0} showZero={true} size="tiny"></CounterBadge>
      <CounterBadge count={0} showZero={true} size="extra-small"></CounterBadge>
      <CounterBadge count={0} showZero={true} size="small"></CounterBadge>
      <CounterBadge count={0} showZero={true} size="medium"></CounterBadge>
      <CounterBadge count={0} showZero={true} size="large"></CounterBadge>
      <CounterBadge count={0} showZero={true} size="extra-large"></CounterBadge>
    </div>
  );
};

// export const IconRegular = () => {
//   return (
//     <div>
//       <Badge icon={<Accessibility16Regular />}></Badge>
//       <Badge icon={<Accessibility20Regular />}></Badge>
//       <Badge icon={<Accessibility24Regular />}></Badge>
//       <Badge icon={<Accessibility28Regular />}></Badge>
//       <Badge icon={<Accessibility32Regular />}></Badge>
//       <Badge icon={<Accessibility48Regular />}></Badge>
//     </div>
//   );
// };
export default meta;
type Story = StoryObj<typeof meta>;
