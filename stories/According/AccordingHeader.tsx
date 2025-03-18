import "./According.module.css";

import type { AccordionHeaderProps } from "@fluentui/react-components";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";

export const AccordingHeaderComponent = ({ ...props }: AccordionHeaderProps) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader {...props}>Accordion Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader {...props}>Accordion Header 2</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 2</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionHeader {...props}>Accordion Header 3</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 3</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FluentProvider>
  );
};
