import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Select, SelectTrigger, SelectValue } from "../../../../components/ui/select";

export const OrderDetailsSection = (): JSX.Element => {
  // Form field data for mapping
  const formRows = [
    [
      {
        name: "buyerStyleNumber",
        label: "Buyer Style Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
      },
      {
        name: "buyerOrderNumber",
        label: "Buyer Order Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
      },
      {
        name: "buyerDelDate",
        label: "Buyer Del Date*",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
      {
        name: "orderDate",
        label: "Order Date*",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
    ],
    [
      { name: "company", label: "Company", type: "text" },
      { name: "deliveryTerms", label: "Delivery Terms", type: "text" },
      { name: "fabricPurchase", label: "Fabric Purchase", type: "text" },
      { name: "oldOrder", label: "Old Order", type: "text" },
    ],
    [
      { name: "merchandiser", label: "Merchandiser*", type: "text" },
      {
        name: "cancelDate",
        label: "Cancel Date",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
      { name: "orderQty", label: "Order qty.", type: "text" },
      { name: "enteredQty", label: "Entered qty.", type: "text" },
    ],
    [
      { name: "bookedGerige", label: "Booked Gerige", type: "text" },
      { name: "remarks", label: "Remarks", type: "text", span: 2 },
      { name: "buyerDept", label: "Buyer Dept.", type: "text" },
    ],
  ];

  // Render form field based on type
  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <Select>
            <SelectTrigger className="w-full h-12 px-4 py-2 rounded-lg border border-[#bbbbbb] focus:ring-0 focus:ring-offset-0">
              <div className="flex items-center justify-between w-full">
                <SelectValue
                  placeholder={field.label}
                  className="font-medium text-[#bbbbbb] text-base"
                />
                {field.icon}
              </div>
            </SelectTrigger>
          </Select>
        );
      case "date":
        return (
          <div className="flex h-12 items-center gap-2.5 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium text-[#bbbbbb] text-base font-['Mulish',Helvetica]">
                {field.label}
              </span>
              {field.icon}
            </div>
          </div>
        );
      default:
        return (
          <Input
            className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] w-full font-medium text-[#bbbbbb] text-base font-['Mulish',Helvetica]"
            placeholder={field.label}
          />
        );
    }
  };

  return (
    <section className="flex flex-col w-full gap-5">
      {formRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3 w-full">
          {row.map((field, fieldIndex) => (
            <div
              key={`field-${rowIndex}-${fieldIndex}`}
              className={`flex items-center ${field.span === 2 ? "w-[674px]" : "w-[331px]"}`}
            >
              {renderField(field)}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
