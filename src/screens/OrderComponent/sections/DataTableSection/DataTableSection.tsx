import React, {useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const DataTableSection = (): JSX.Element => {
  // Data for the table rows
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
  const [tableComponents, setTableComponents] = useState(components);
  return (
    <div className="px-10 py-6 ">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#2c97cd]">
            <TableHead className="text-white font-mulish-14-sp-medium font-[number:var(--mulish-14-sp-medium-font-weight)] text-[length:var(--mulish-14-sp-medium-font-size)] tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] [font-style:var(--mulish-14-sp-medium-font-style)] pl-4 pr-8 py-4">
              S. No
            </TableHead>
            <TableHead className="text-white font-mulish-14-sp-medium font-[number:var(--mulish-14-sp-medium-font-weight)] text-[length:var(--mulish-14-sp-medium-font-size)] tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] [font-style:var(--mulish-14-sp-medium-font-style)] pl-4 pr-8 py-4">
              Component
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableComponents.map((component, index) => (
            <TableRow
              key={component.id}
              className={index % 2 === 1 ? "bg-[#f7feff]" : ""}
            >
              <TableCell className="pl-4 pr-8 py-4 font-mulish-14-sp-medium font-[number:var(--mulish-14-sp-medium-font-weight)] text-foundationgreygrey-300 text-[length:var(--mulish-14-sp-medium-font-size)] tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] [font-style:var(--mulish-14-sp-medium-font-style)]">
                {component.id}
              </TableCell>
              <TableCell className="pl-4 pr-8 py-4 font-mulish-14-sp-medium font-[number:var(--mulish-14-sp-medium-font-weight)] text-foundationgreygrey-300 text-[length:var(--mulish-14-sp-medium-font-size)] tracking-[var(--mulish-14-sp-medium-letter-spacing)] leading-[var(--mulish-14-sp-medium-line-height)] [font-style:var(--mulish-14-sp-medium-font-style)]">
                {component.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
