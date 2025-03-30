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

export const DataTableSection = (): JSX.Element => {
  // Data for the tax info fields
  const taxInfoFields = [
    [
      "Place of Supply",
      "Invoice Type",
      "Amount Are?",
      "Reverse Charge",
      "Income Tax TCS",
      "GST TDS",
    ],
    ["GST TCS"],
  ];

  // Data for the sales preference fields
  const salesPreferenceFields = [
    ["Default Account", "Cash Sale", "Cash Sale Account"],
  ];

  // Data for the price fields
  const priceFields = [["Price Group", "Terms of payment", "Discount scheme"]];

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards">
      <Accordion type="single" defaultValue="tax-info" className="w-full">
        <AccordionItem value="tax-info" className="border-none">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Tax Info
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {taxInfoFields.map((row, rowIndex) => (
                <div
                  key={`tax-row-${rowIndex}`}
                  className="flex w-full items-start gap-4"
                >
                  {row.map((field, fieldIndex) => (
                    <div
                      key={`tax-field-${rowIndex}-${fieldIndex}`}
                      className={`${row.length < 6 ? "w-[216px]" : "flex-1"}`}
                    >
                      <Input
                        placeholder={field}
                        className="h-10 bg-hostbooksbackground border-[#bbbbbb] text-foundation-greygrey-400 font-mulish-14-sp-regular"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sales-preference" className="border-none mt-6">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Sales Preference
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {salesPreferenceFields.map((row, rowIndex) => (
                <div
                  key={`sales-row-${rowIndex}`}
                  className="flex w-full items-start gap-4"
                >
                  {row.map((field, fieldIndex) => (
                    <div
                      key={`sales-field-${rowIndex}-${fieldIndex}`}
                      className="w-[216px]"
                    >
                      <Input
                        placeholder={field}
                        className="h-10 bg-hostbooksbackground border-[#bbbbbb] text-foundation-greygrey-400 font-mulish-14-sp-regular"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-none mt-6">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Price
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {priceFields.map((row, rowIndex) => (
                <div
                  key={`price-row-${rowIndex}`}
                  className="flex w-full items-start gap-4"
                >
                  {row.map((field, fieldIndex) => (
                    <div
                      key={`price-field-${rowIndex}-${fieldIndex}`}
                      className="w-[216px]"
                    >
                      <Input
                        placeholder={field}
                        className="h-10 bg-hostbooksbackground border-[#bbbbbb] text-foundation-greygrey-400 font-mulish-14-sp-regular"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
