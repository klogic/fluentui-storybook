import type { Meta, StoryObj } from "@storybook/react";

import { BadgeShapeComponent } from "./BadgeShape";
import { Badge } from "@fluentui/react-components";
import {
  CalendarLtrRegular,
  SearchFilled,
  Accessibility16Regular,
} from "@fluentui/react-icons";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "FluentUI/Badge/Badge/BadgeShape",
  component: BadgeShapeComponent,
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
      options: [
        "tiny",
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
      ],
      table: {
        defaultValue: { summary: "small" },
      },
      description: "Select the Badge size",
    },
    color: {
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
      table: {
        defaultValue: { summary: "brand" },
      },
      description: "Select the Badge color",
    },
    shape: {
      control: "select",
      options: ["square", "rounded", "circular"],
      description: "Select the Badge sharp",
      table: {
        defaultValue: { summary: "circular" },
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
  },
  args: {
    size: "medium",
    color: "brand",
    shape: "circular",
    appearance: "filled",
  },
} satisfies Meta<typeof BadgeShapeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    size: "small",
    appearance: "filled",
    color: "brand",
    shape: "circular",
  },
};

export const Tiny: Story = {
  args: {
    size: "tiny",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    size: "large",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
  },
};

export const All = () => {
  return (
    <div>
      <Badge size="tiny"></Badge>
      <Badge size="extra-small"></Badge>
      <Badge size="small"></Badge>
      <Badge size="medium"></Badge>
      <Badge size="large"></Badge>
      <Badge size="extra-large"></Badge>
    </div>
  );
};

// export const Icon = () => {
//   return (
//     <div>
//       <Badge icon={<Accessibility16Regular />}></Badge>
//     </div>
//   );
// };
export default meta;
type Story = StoryObj<typeof meta>;
