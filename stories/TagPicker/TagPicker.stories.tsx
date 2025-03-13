import type { Meta, StoryObj } from "@storybook/react";

import {  BadgePropsText, TagPickerComponent } from "./TagPicker";
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
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TagPicker/TagPicker",
  component: TagPickerComponent,
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
      description: "Select the Badge size",
      table: {
        defaultValue: { summary: "small" },
      },
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
      table: {
        defaultValue: { summary: "brand" },
      },
    },
    shape: {
      control: "select",
      options: ["square", "rounded", "circular"],
      description: "Select the Badge sharp",
      table: {
        defaultValue: { summary: "circular" },
      },
    },
    text: {},
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
} satisfies Meta<BadgePropsText>;

export const Default: Story = {
  args: {
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
