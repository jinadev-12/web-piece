"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle, Minus, Star } from "lucide-react";

// Utility function for classnames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-none", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, hideChevron, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4  font-medium transition-all [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        {!hideChevron && (
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, Icon, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between mt-2 ml-[3.75rem]">
        {/* Inner padded container for the answer */}
        <div className="px-6 py-6 bg-[#12342e]/60 rounded-l-full rounded-r-[2150px] flex-1">
          {children}
        </div>

        {/* Optional right-side icon */}
        {Icon && <div className="ml-4 mt-6">{Icon}</div>}
      </div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// --- FAQ Data ---
const faqs = [
  {
    question: "Do You Offer Revisions On Designs?",
    answer:
      "Yes, I Provide Revisions To Ensure The Final Design Aligns Perfectly With Your Expectations.",
    Icon: <i class="fi fi-sr-comment text-3xl text-[#26ffe3]"></i>,
  },
  {
    question: "What Tools Do You Use For Your Work?",
    answer:
      "I use industry-standard design tools to deliver high-quality results.",
    Icon: <i class="fi fi-sr-comment text-3xl text-[#26ffe3]"></i>,
  },
  {
    question: "Can You Help With Branding From Scratch?",
    answer:
      "Absolutely! I can help you build your brand identity from the ground up.",
    Icon: <i class="fi fi-sr-comment text-3xl text-[#26ffe3]"></i>,
  },
  {
    question: "How Do You Approach A New Project?",
    answer:
      "I start with understanding your goals and requirements thoroughly.",
    Icon: <i class="fi fi-sr-comment text-3xl text-[#26ffe3]"></i>,
  },
  {
    question: "What Is The Cost Of Your Services?",
    answer: "Pricing varies based on project scope and requirements.",
    Icon: <i class="fi fi-sr-comment text-3xl text-[#26ffe3]"></i>,
  },
];

// --- Main FAQ Component ---
export default function FAQ() {
  const [openItem, setOpenItem] = React.useState("");

  return (
    <section className="w-full py-20 px-4 text-white min-h-[100vh] pt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#12342e] text-accent px-6 py-2 rounded-full text-sm font-semibold">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-6">
            Have Questions?<br /> Here Are Quick Answers
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={(val) => setOpenItem(val)}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const itemValue = `item-${index}`;
            const isOpen = openItem === itemValue;

            return (
              <AccordionItem key={index} value={itemValue}>
                <AccordionTrigger
                  hideChevron
                  className="hover:no-underline bg-[#12342e]/60 rounded-l-[2150px] rounded-r-full px-6 py-4 transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-[#26ffe3] flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#001a14]" />
                      ) : (
                        <HelpCircle className="w-5 h-5 text-[#001a14]" />
                      )}
                    </div>

                    <span className="text-left text-white font-normal">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent Icon={faq.Icon}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
