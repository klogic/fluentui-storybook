import "./According.module.css";

import * as React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";
import type { AccordionProps } from "@fluentui/react-components";

export const AccordingComponent = ({ ...props }: AccordionProps) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Accordion {...props}>
        <AccordionItem value="1">
          <AccordionHeader>Accordion Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader>Accordion Header 2</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 2</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionHeader>Accordion Header 3</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 3</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FluentProvider>
  );
};
