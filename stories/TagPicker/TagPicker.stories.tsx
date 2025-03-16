import type { Meta, StoryObj } from "@storybook/react";

import { TagPickerComponent } from "./TagPicker";
import { TagPickerProps } from "@fluentui/react-components";
const meta = {
  title: "FluentUI/TagPicker/TagPicker",
  component: TagPickerComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "https://react.fluentui.dev/?path=/docs/components-tagpicker--docs",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    positioning: {
      control: "select",
      options: [
        "above",
        "above-start",
        "above-end",
        "below",
        "below-start",
        "below-end",
        "before",
        "before-top",
        "before-bottom",
        "after",
        "after-top",
        "after-bottom",
      ],
      description:
        "Configure the positioning of the combobox dropdown. Please refer to the positioning documentation for more details.",
    },
    size: {
      table: {
        defaultValue: { summary: "medium" },
      },
      control: "select",
      options: ["medium", "large", "extra-large"],
      description: "Controls the colors and borders of the combobox trigger",
    },
    appearance: {
      table: {
        defaultValue: { summary: "outline" },
      },
      control: "select",
      options: ["outline", "underline", "filled-darker", "filled-lighter"],
      description: "Controls the colors and borders of the combobox trigger.",
    },
    noPopover: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: "boolean",
      description:
        "By default, when a single children is provided, the TagPicker will assume that the children is a popover. By setting this prop to true, the children will be treated as a trigger instead.",
    },
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: { noPopover: false, appearance: "outline", size: "medium", disabled: false },
} satisfies Meta<TagPickerProps>;
export const Default: Story = {
  args: { noPopover: false, appearance: "outline", size: "medium", disabled: false },
};
export default meta;
type Story = StoryObj<typeof meta>;
