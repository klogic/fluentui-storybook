import type { Meta, StoryObj } from "@storybook/react";

import { BadgePropsText, BadgeTextComponent } from "./BadgeText";
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
} from "@fluentui/react-icons";
("@fluentui/react-icons");
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "FluentUI/Badge/BadgeText",
  component: BadgeTextComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
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
      description: "Select the Badge color",
    },
    shape: {
      control: "select",
      options: ["square", "rounded", "circular"],
      description: "Select the Badge sharp",
    },
    text: {},
  },
  args: {
    size: "medium",
    color: "warning",
    shape: "circular",
    appearance: "filled",
  },
} satisfies Meta<BadgePropsText>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tiny = {
  args: {
    size: "tiny",
    text: "999+",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
    text: "999+",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    text: "999+",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    text: "999+",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    text: "999+",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
    text: "999+",
  },
};

// export const IconWithSize = () => {
//   return (
//     <div>
//       <Badge icon={<Accessibility16Regular />} size="tiny"></Badge>
//       <Badge icon={<Accessibility16Regular />} size="extra-small"></Badge>
//       <Badge icon={<Accessibility16Regular />} size="small"></Badge>
//       <Badge icon={<Accessibility16Regular />} size="medium"></Badge>
//       <Badge icon={<Accessibility16Regular />} size="large"></Badge>
//       <Badge icon={<Accessibility16Regular />} size="extra-large"></Badge>
//     </div>
//   );
// };

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
