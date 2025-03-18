import type { Meta, StoryObj } from "@storybook/react";

import { AccordionItemProps } from "@fluentui/react-components";
import { AccordingItemComponent } from "./AccordingItem";
const meta = {
  title: "FluentUI/According/AccordingItem",
  component: AccordingItemComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "https://react.fluentui.dev/?path=/docs/components-accordion--docs",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables opening/closing of panel",
    },
  },
  args: {},
} satisfies Meta<AccordionItemProps>;
export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};
export default meta;
type Story = StoryObj<typeof meta>;
