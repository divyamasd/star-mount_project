import { ChevronUpIcon } from "lucide-react";
import React from "react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const ActionButtonsSection = (): JSX.Element => {
  // Define data for input fields to make the code more maintainable
  const taxInfoFields = [
    { id: 1, label: "Place of Supply" },
    { id: 2, label: "Invoice Type" },
    { id: 3, label: "Amount Are?" },
    { id: 4, label: "Reverse Charge" },
    { id: 5, label: "Income Tax TCS" },
    { id: 6, label: "GST TDS" },
    { id: 7, label: "GST TCS" },
  ];

  const salesPreferenceFields = [
    { id: 1, label: "Default Account" },
    { id: 2, label: "Cash Sale" },
    { id: 3, label: "Cash Sale Account" },
  ];

  const priceFields = [
    { id: 1, label: "Price Group" },
    { id: 2, label: "Terms of payment" },
    { id: 3, label: "Discount scheme" },
  ];

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-mulish-18-sp-medium font-[number:var(--mulish-18-sp-medium-font-weight)] text-foundation-greygrey-500 text-[length:var(--mulish-18-sp-medium-font-size)] tracking-[var(--mulish-18-sp-medium-letter-spacing)] leading-[var(--mulish-18-sp-medium-line-height)]">
              Tax Info
            </h3>

            <div className="flex items-center justify-center p-2 rounded-lg border border-solid border-[#b0d5ea]">
              <ChevronUpIcon className="w-4 h-4" />
            </div>
          </div>

          <Separator className="w-full h-px" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 w-full">
            {taxInfoFields.slice(0, 6).map((field) => (
              <div key={field.id} className="flex-1 min-w-[216px]">
                <Input
                  className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-[216px]">
              <Input
                className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                placeholder={taxInfoFields[6].label}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-end justify-between w-full">
            <h3 className="font-mulish-18-sp-medium font-[number:var(--mulish-18-sp-medium-font-weight)] text-foundation-greygrey-500 text-[length:var(--mulish-18-sp-medium-font-size)] tracking-[var(--mulish-18-sp-medium-letter-spacing)] leading-[var(--mulish-18-sp-medium-line-height)]">
              Sales Preference
            </h3>
          </div>

          <Separator className="w-full h-px" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 w-full">
            {salesPreferenceFields.map((field) => (
              <div key={field.id} className="w-[216px]">
                <Input
                  className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-end justify-between w-full">
            <h3 className="font-mulish-18-sp-medium font-[number:var(--mulish-18-sp-medium-font-weight)] text-foundation-greygrey-500 text-[length:var(--mulish-18-sp-medium-font-size)] tracking-[var(--mulish-18-sp-medium-letter-spacing)] leading-[var(--mulish-18-sp-medium-line-height)]">
              Price
            </h3>
          </div>

          <Separator className="w-full h-px" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 w-full">
            {priceFields.map((field) => (
              <div key={field.id} className="w-[216px]">
                <Input
                  className="h-10 px-4 py-2 bg-hostbooksbackground rounded-lg border border-solid border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
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
