import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionHeader,
  AccordionHeaderProps,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";
import { AddFilled, AddRegular, CalendarArrowDownRegular, RocketRegular } from "@fluentui/react-icons";
import { AccordingHeaderComponent } from "./AccordingHeader";
const icons = {
  AddRegular: <AddRegular />,
  AddFilled: <AddFilled />,
  RocketRegular: <RocketRegular />,
  CalendarArrowDownRegular: <CalendarArrowDownRegular />,
};
const meta = {
  title: "FluentUI/According/AccordingHeader",
  component: AccordingHeaderComponent,
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
    icon: {
      control: "select",
      options: [...Object.keys(icons)],
      mapping: {
        ...icons,
      },
      labels: {
        AddRegular: "AddRegular",
        AddFilled: "AddFilled",
        RocketRegular: "RocketRegular",
        CalendarArrowDownRegular: "CalendarArrowDownRegular",
      },
      description: "Expand icon slot rendered before (or after) children content in heading.",
    },
    expandIcon: {
      control: "select",
      options: [...Object.keys(icons)],
      mapping: {
        ...icons,
      },
      labels: {
        AddRegular: "AddRegular",
        AddFilled: "AddFilled",
        RocketRegular: "RocketRegular",
        CalendarArrowDownRegular: "CalendarArrowDownRegular",
      },
      description: "Expand icon slot rendered before (or after) children content in heading.",
    },
    expandIconPosition: {
      control: "select",
      options: ["start", "end"],
      description: "The position of the expand icon slot in heading.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extra-large"],
      description: "Size of spacing in the heading",
    },
  },
  args: {},
} satisfies Meta<AccordionHeaderProps>;
export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: { icon: <AddRegular /> },
};
export const ExpandIcon: Story = {
  args: { expandIcon: <AddRegular /> },
};
export const ExpandIconPositionEnd: Story = {
  args: { expandIcon: <AddRegular />, expandIconPosition: "end" },
};
export const Size = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader size="small">Small Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader size="medium">Medium Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader size="large">Large Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader size="extra-large">Extra Large Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default meta;
type Story = StoryObj<typeof meta>;
