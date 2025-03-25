import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const TotalQuantitySection = (): JSX.Element => {
  // Data for the component table
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
    <Card className="w-[284px] bg-[#e3f9ff] shadow-none rounded-none">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#2c97cd]">
              <TableHead className="h-12 text-white font-mulish-14-sp-medium font-medium text-[14px] leading-[150%] tracking-[0px] pl-4 pr-8 py-4">
                S. No
                <span className="inline-block w-[108px]"></span>
                Commponent
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {components.map((component, index) => (
              <TableRow
                key={component.id}
                className={index % 2 === 1 ? "bg-[#eefcff]" : ""}
              >
                <TableCell className="flex items-center h-[46px] pl-4 pr-8 py-4">
                  <div className="flex w-full items-center gap-[108px]">
                    <span className="font-mulish-14-sp-medium font-medium text-foundationgreygrey-300 text-[14px] leading-[150%] tracking-[0px]">
                      {component.id}
                    </span>
                    <span className="font-mulish-14-sp-medium font-medium text-foundationgreygrey-300 text-[14px] leading-[150%] tracking-[0px]">
                      {component.name}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
