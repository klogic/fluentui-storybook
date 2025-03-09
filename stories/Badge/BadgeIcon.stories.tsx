import type { Meta, StoryObj } from "@storybook/react";

import { BadgePropsText, BadgeIconComponent } from "./BadgeIcon";
import { Badge } from "@fluentui/react-components";
import {
  CalendarLtrRegular,
  SearchFilled,
  Accessibility16Regular,
  Accessibility20Regular,
  Accessibility24Regular,
  Accessibility28Regular,
  Accessibility32Regular,
  Accessibility48Regular,
  Accessibility16Filled,
  Accessibility20Filled,
  Accessibility24Filled,
  Accessibility28Filled,
  Accessibility32Filled,
  Accessibility48Filled,
} from "@fluentui/react-icons";
("@fluentui/react-icons");
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const icons = {
  Accessibility16Regular: <Accessibility16Regular />,
  Accessibility20Regular: <Accessibility20Regular />,
  Accessibility24Regular: <Accessibility24Regular />,
  Accessibility28Regular: <Accessibility28Regular />,
  Accessibility32Regular: <Accessibility32Regular />,
  Accessibility48Regular: <Accessibility48Regular />,
  Accessibility16Filled: <Accessibility16Filled />,
  Accessibility20Filled: <Accessibility20Filled />,
  Accessibility24Filled: <Accessibility24Filled />,
  Accessibility28Filled: <Accessibility28Filled />,
  Accessibility32Filled: <Accessibility32Filled />,
  Accessibility48Filled: <Accessibility48Filled />,
};

const meta = {
  title: "FluentUI/Badge/Badge/BadgeIcon",
  component: BadgeIconComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          "https://react.fluentui.dev/?path=/docs/components-badge-badge--docs",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      table: {
        defaultValue: { summary: "small" },
      },
      options: [
        "tiny",
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
      ],
      description: "Select the Badge size",
    },
    color: {
      table: {
        defaultValue: { summary: "brand" },
      },
      control: "select",
      options: [
        "brand",
        "danger",
        "important",
        "informative",
        "severe",
        "subtle",
        "success",
        "warning",
      ],
      description: "Select the Badge color",
    },
    icon: {
      control: "select",
      options: [...Object.keys(icons)],
      mapping: {
        ...icons,
      },
      labels: {
        Accessibility16Regular: "Accessibility16Regular",
        Accessibility20Regular: "Accessibility20Regular",
        Accessibility24Regular: "Accessibility24Regular",
        Accessibility28Regular: "Accessibility28Regular",
        Accessibility32Regular: "Accessibility32Regular",
        Accessibility48Regular: "Accessibility48Regular",
        Accessibility16Filled: "Accessibility16Filled",
        Accessibility20Filled: "Accessibility20Filled",
        Accessibility24Filled: "Accessibility24Filled",
        Accessibility28Filled: "Accessibility28Filled",
        Accessibility32Filled: "Accessibility32Filled",
        Accessibility48Filled: "Accessibility48Filled",
      },
    },
    appearance: {
      table: {
        defaultValue: { summary: "filled" },
      },
      control: "select",
      options: ["filled", "ghost", "outline", "tint"],
      description: "Select the Badge sharp",
    },
    shape: {
      table: {
        defaultValue: { summary: "circular" },
      },
      control: "select",
      options: ["square", "rounded", "circular"],
      description: "Select the Badge sharp",
    },
    iconPosition: {
      control: "select",
      options: ["before", "after"],
      description: "Select the icon position",
    },
    text: {},
  },
  args: {
    size: "medium",
    color: "brand",
    shape: "circular",
    appearance: "filled",
  },
} satisfies Meta<BadgePropsText>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "small",
    icon: <Accessibility16Regular />,
    appearance: "filled",
    color: "brand",
    shape: "circular",
  },
};

export const Tiny = {
  args: {
    size: "tiny",
    icon: icons,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
    icon: <Accessibility16Regular />,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    icon: <Accessibility16Regular />,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    icon: <Accessibility16Regular />,
  },
};
export const Large: Story = {
  args: {
    size: "large",
    icon: <Accessibility16Regular />,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
    icon: <Accessibility16Regular />,
  },
};

export const IconBeforeAfter = () => {
  return (
    <div>
      <Badge icon={<Accessibility16Regular />} iconPosition="before">
        999+
      </Badge>
      <Badge icon={<Accessibility16Regular />} iconPosition="after">
        999+
      </Badge>
    </div>
  );
};

export const IconWithSize = () => {
  return (
    <div>
      <Badge icon={<Accessibility16Regular />} size="tiny"></Badge>
      <Badge icon={<Accessibility16Regular />} size="extra-small"></Badge>
      <Badge icon={<Accessibility16Regular />} size="small"></Badge>
      <Badge icon={<Accessibility16Regular />} size="medium"></Badge>
      <Badge icon={<Accessibility16Regular />} size="large"></Badge>
      <Badge icon={<Accessibility16Regular />} size="extra-large"></Badge>
      <Badge icon={<Accessibility16Filled />} size="tiny"></Badge>
      <Badge icon={<Accessibility16Filled />} size="extra-small"></Badge>
      <Badge icon={<Accessibility16Filled />} size="small"></Badge>
      <Badge icon={<Accessibility16Filled />} size="medium"></Badge>
      <Badge icon={<Accessibility16Filled />} size="large"></Badge>
      <Badge icon={<Accessibility16Filled />} size="extra-large"></Badge>
    </div>
  );
};

export const IconRegularDifferenceSizeIcon = () => {
  return (
    <div>
      <Badge icon={<Accessibility16Regular />}></Badge>
      <Badge icon={<Accessibility20Regular />}></Badge>
      <Badge icon={<Accessibility24Regular />}></Badge>
      <Badge icon={<Accessibility28Regular />}></Badge>
      <Badge icon={<Accessibility32Regular />}></Badge>
      <Badge icon={<Accessibility48Regular />}></Badge>
      <Badge icon={<Accessibility16Filled />}></Badge>
      <Badge icon={<Accessibility20Filled />}></Badge>
      <Badge icon={<Accessibility24Filled />}></Badge>
      <Badge icon={<Accessibility28Filled />}></Badge>
      <Badge icon={<Accessibility32Filled />}></Badge>
      <Badge icon={<Accessibility48Filled />}></Badge>
    </div>
  );
};
export default meta;
type Story = StoryObj<typeof meta>;
