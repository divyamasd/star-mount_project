import { CalendarIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OrderDetailsSection = (): JSX.Element => {
  // Form field data for mapping
  const formRows = [
    [
      {
        name: "buyerStyleNumber",
        label: "Buyer Style Number*",
        type: "select",
      },
      {
        name: "buyerOrderNumber",
        label: "Buyer Order Number*",
        type: "select",
      },
      { name: "buyerDelDate", label: "Buyer Del Date*", type: "date" },
      { name: "orderDate", label: "Order Date*", type: "date" },
    ],
    [
      { name: "company", label: "Company", type: "input" },
      { name: "deliveryTerms", label: "Delivery Terms", type: "input" },
      { name: "fabricPurchase", label: "Fabric Purchase", type: "input" },
      { name: "oldOrder", label: "Old Order", type: "input" },
    ],
    [
      { name: "merchandiser", label: "Merchandiser*", type: "input" },
      { name: "cancelDate", label: "Cancel Date", type: "date" },
      { name: "orderQty", label: "Order qty.", type: "input" },
      { name: "enteredQty", label: "Entered qty.", type: "input" },
    ],
    [
      { name: "bookedGerige", label: "Booked Gerige", type: "input" },
      { name: "remarks", label: "Remarks", type: "input", span: 2 },
      { name: "buyerDept", label: "Buyer Dept.", type: "input" },
    ],
  ];

  // Render form field based on type
  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <Select>
            <SelectTrigger className="w-full h-12 border-[#bbbbbb] text-[#bbbbbb] font-medium">
              <SelectValue placeholder={field.label} />
            </SelectTrigger>
          </Select>
        );
      case "date":
        return (
          <div className="relative w-full">
            <Input
              className="w-full h-12 border-[#bbbbbb] text-[#bbbbbb] font-medium pl-4"
              placeholder={field.label}
            />
            <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" />
          </div>
        );
      default:
        return (
          <Input
            className="w-full h-12 border-[#bbbbbb] text-[#bbbbbb] font-medium"
            placeholder={field.label}
          />
        );
    }
  };

  return (
    <section className="flex flex-col w-full items-start gap-5 opacity-[0.46]">
      {formRows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex items-center gap-3 relative self-stretch w-full"
        >
          {row.map((field, fieldIndex) => (
            <div
              key={`field-${rowIndex}-${fieldIndex}`}
              className={`flex items-center gap-[17px] relative ${field.span === 2 ? "w-[674px]" : "w-[331px]"}`}
            >
              {renderField(field)}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
