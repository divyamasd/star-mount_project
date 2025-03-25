import { CalendarIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const ImportSection = (): JSX.Element => {
  // Data for input fields to enable mapping
  const inputFields = [
    { id: 1, placeholder: "Import (Repeat Order)" },
    { id: 2, placeholder: "Style No." },
    { id: 3, placeholder: "Delivery Date", hasCalendarIcon: true },
    { id: 4, placeholder: "Order No." },
  ];

  return (
    <section className="flex w-full items-center gap-3 opacity-[0.46]">
      {inputFields.map((field) => (
        <div key={field.id} className="flex-1">
          <div className="relative h-12">
            <div className="relative">
              {field.hasCalendarIcon ? (
                <div className="relative">
                  <Input
                    className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] font-medium text-[#bbbbbb] [font-family:'Mulish',Helvetica]"
                    placeholder={field.placeholder}
                  />
                  <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" />
                </div>
              ) : (
                <Input
                  className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] font-medium text-[#bbbbbb] [font-family:'Mulish',Helvetica]"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
