import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const QuantityEntrySection = (): JSX.Element => {
  // Data for components to enable mapping
  const components = [
    { id: 1, name: "Component A" },
    { id: 2, name: "Component B" },
    { id: 3, name: "Component C" },
    { id: 4, name: "Component D" },
    { id: 5, name: "Component E" },
    { id: 6, name: "Component F" },
    { id: 7, name: "Component G" },
    { id: 8, name: "Component H" },
    { id: 9, name: "Component I" },
  ];

  return (
    <div className="flex items-center gap-2.5 bg-[#e3f9ff]">
      <div className="flex flex-col w-full">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#2c97cd]">
              <TableHead className="text-white font-mulish-14-sp-medium tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] py-4 pl-4 pr-8">
                S. No
              </TableHead>
              <TableHead className="text-white font-mulish-14-sp-medium tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] py-4">
                Component
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {components.map((component, index) => (
              <TableRow
                key={component.id}
                className={index % 2 === 1 ? "bg-[#eefcff]" : ""}
              >
                <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationgreygrey-300 tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)]">
                  {component.id}
                </TableCell>
                <TableCell className="py-4 font-mulish-14-sp-medium text-foundationgreygrey-300 tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)]">
                  {component.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
