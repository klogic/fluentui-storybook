import type { Meta, StoryObj } from "@storybook/react";

import { BadgeComponent } from "./Badge";
import { Badge } from "@fluentui/react-components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Badge",
  component: BadgeComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
        control: 'select',
        options: ['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
        description: 'Select the Badge size',
      },
    color: {
        control: 'select',
        options: ['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning'],
        description: 'Select the Badge color',
      }
  },
  args:{
    size: "extra-large",
    color: "warning"
  }
} satisfies Meta<typeof BadgeComponent>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
export default meta;
type Story = StoryObj<typeof meta>;