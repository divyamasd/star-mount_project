import { ChevronUpIcon } from "lucide-react";
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

export const OrderExchangeSection = (): JSX.Element => {
  // Define data for input fields to make the code more maintainable
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

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards">
      <Accordion
        type="single"
        collapsible
        defaultValue="tax-info"
        className="w-full"
      >
        <AccordionItem value="tax-info" className="border-none">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-mulish-18-sp-medium text-foundation-greygrey-500 leading-[var(--mulish-18-sp-medium-line-height)]">
              Tax Info
            </h3>
            <AccordionTrigger className="p-2 border border-solid border-[#b0d5ea] rounded-lg overflow-hidden">
              <ChevronUpIcon className="w-4 h-4" />
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {taxInfoFields.slice(0, 6).map((field) => (
                  <div key={field.id} className="relative h-[49px]">
                    <Input
                      className="w-full h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-regular text-foundation-greygrey-400"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="relative h-[49px]">
                  <Input
                    className="w-full h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={taxInfoFields[6].label}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-mulish-18-sp-medium text-foundation-greygrey-500 leading-[var(--mulish-18-sp-medium-line-height)]">
            Sales Preference
          </h3>
          <Separator className="my-4" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salesPreferenceFields.map((field) => (
              <div key={field.id} className="relative h-[49px]">
                <Input
                  className="w-full h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-regular text-foundation-greygrey-400"
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-mulish-18-sp-medium text-foundation-greygrey-500 leading-[var(--mulish-18-sp-medium-line-height)]">
            Price
          </h3>
          <Separator className="my-4" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priceFields.map((field) => (
              <div key={field.id} className="relative h-[49px]">
                <Input
                  className="w-full h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-regular text-foundation-greygrey-400"
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
