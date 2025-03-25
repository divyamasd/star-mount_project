import { CalendarIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const ImportSection = (): JSX.Element => {
  // Define the input fields data for easy mapping
  const inputFields = [
    { id: 1, placeholder: "Import (Repeat Order)" },
    { id: 2, placeholder: "Style No." },
    { id: 3, placeholder: "Delivery Date", hasCalendarIcon: true },
    { id: 4, placeholder: "Order No." },
  ];

  return (
    <div className="flex w-full items-center gap-3">
      {inputFields.map((field) => (
        <div key={field.id} className="flex-1">
          <div className="relative">
            <Input
              className="h-12 px-4 py-2 text-base font-medium text-[#bbbbbb] [font-family:'Mulish',Helvetica] placeholder:text-[#bbbbbb]"
              placeholder={field.placeholder}
            />
            {field.hasCalendarIcon && (
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#bbbbbb]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
