import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { multiplatFormItems } from "@/constants";

const Multiplatform = () => {
  return (
    <Accordion type="single" collapsible>
      {multiplatFormItems.map((item) => {
        return (
          <AccordionItem key={item.platform} value={item.platform}>
            <AccordionTrigger>{item.platform}</AccordionTrigger>
            <AccordionContent>
              <item.platformComponent />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Multiplatform;
