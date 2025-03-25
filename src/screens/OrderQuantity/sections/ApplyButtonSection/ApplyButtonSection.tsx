import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Define the form field data for reusability
const taxInfoFields = [
  { id: "placeOfSupply", label: "Place of Supply" },
  { id: "invoiceType", label: "Invoice Type" },
  { id: "amountAre", label: "Amount Are?" },
  { id: "reverseCharge", label: "Reverse Charge" },
  { id: "incomeTaxTCS", label: "Income Tax TCS" },
  { id: "gstTDS", label: "GST TDS" },
  { id: "gstTCS", label: "GST TCS" },
];

const salesPreferenceFields = [
  { id: "defaultAccount", label: "Default Account" },
  { id: "cashSale", label: "Cash Sale" },
  { id: "cashSaleAccount", label: "Cash Sale Account" },
];

const priceFields = [
  { id: "priceGroup", label: "Price Group" },
  { id: "termsOfPayment", label: "Terms of payment" },
  { id: "discountScheme", label: "Discount scheme" },
];

export const ApplyButtonSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards">
      <Accordion
        type="single"
        collapsible
        defaultValue="tax-info"
        className="w-full"
      >
        <AccordionItem value="tax-info" className="border-none">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="font-mulish-18-sp-medium text-foundation-greygrey-500 p-0 hover:no-underline">
              Tax Info
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-6 gap-4">
                {taxInfoFields.slice(0, 6).map((field) => (
                  <div key={field.id} className="relative">
                    <Input
                      className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="relative w-[216px]">
                  <Input
                    className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={taxInfoFields[6].label}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        defaultValue="sales-preference"
        className="w-full"
      >
        <AccordionItem value="sales-preference" className="border-none">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="font-mulish-18-sp-medium text-foundation-greygrey-500 p-0 hover:no-underline">
              Sales Preference
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex gap-4">
              {salesPreferenceFields.map((field) => (
                <div key={field.id} className="relative w-[216px]">
                  <Input
                    className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        defaultValue="price"
        className="w-full"
      >
        <AccordionItem value="price" className="border-none">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="font-mulish-18-sp-medium text-foundation-greygrey-500 p-0 hover:no-underline">
              Price
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex gap-4">
              {priceFields.map((field) => (
                <div key={field.id} className="relative w-[216px]">
                  <Input
                    className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
