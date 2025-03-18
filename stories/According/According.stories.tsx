import type { Meta, StoryObj } from "@storybook/react";

import { AccordingComponent } from "./According";
import { AccordionProps } from "@fluentui/react-components";
const meta = {
  title: "FluentUI/According/According",
  component: AccordingComponent,
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
    collapsible: {
      control: "boolean",
      description: "Indicates if Accordion support multiple Panels closed at the same time.",
    },
    multiple: {
      control: "boolean",
      description: "Indicates if Accordion support multiple Panels opened at the same time.",
    },
    navigation: {
      control: "select",
      options: ["circular", "linear"],
      description:
        "Deprecated: Arrow keyboard navigation is not recommended for accordions. Consider using Tree if arrow navigation is a hard requirement. Indicates if keyboard navigation is available and gives two options, linear or circular navigation.",
    },
  },
  args: {},
} satisfies Meta<AccordionProps>;
export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
  args: { multiple: true },
};
export default meta;
type Story = StoryObj<typeof meta>;
