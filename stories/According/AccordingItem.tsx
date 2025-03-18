import "./According.module.css";

import type { AccordionItemProps } from "@fluentui/react-components";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";

export const AccordingItemComponent = ({ ...props }: AccordionItemProps) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Accordion>
        <AccordionItem {...props} value="1">
          <AccordionHeader>Accordion Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem {...props} value="2">
          <AccordionHeader>Accordion Header 2</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 2</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem {...props} value="3">
          <AccordionHeader>Accordion Header 3</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 3</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FluentProvider>
  );
};
