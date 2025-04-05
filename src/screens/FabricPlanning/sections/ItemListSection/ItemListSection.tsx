import { TrashIcon } from "lucide-react";
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
import deleteIcon from "../../../../../public/deleteIcon.png"

export const ItemListSection = (): JSX.Element => {
  // Data for the table rows
  const tableData = [
    {
      id: 1,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Computer",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 12,
      processItem: "Cotton 5%",
      uom: "MTR",
    },
    {
      id: 2,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Mobile",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 4,
      processItem: "Cotton12%",
      uom: "INC",
    },
    {
      id: 3,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Tape",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 24,
      processItem: "Cotton9%",
      uom: "INC",
    },
    {
      id: 4,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Scale",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 6,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 5,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Computer",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 5,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 6,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Computer",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 18,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 7,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Scale",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 33,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 8,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Tape",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 8,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 9,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Computer",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 9,
      processItem: "Cotton9%",
      uom: "MTR",
    },
    {
      id: 10,
      rowItem: "Ready Fabric",
      rowUom: "Inch",
      process: "Ready Fabric",
      item: "Computer",
      consPercentage: 100,
      avg: 12,
      pLossPercentage: 1,
      processItem: "Cotton9%",
      uom: "MTR",
    },
  ];

  return (
    <section className="w-full mt-8">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#e3f9ff]">
                  <TableHead className="w-[55px] rounded-tl-2xl text-center p-4">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Row Item
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Row UOM
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Process
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Item
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Cons. %
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Avg.
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    P.Loss%
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Process Item
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    UOM
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="text-center p-3">
                     
                        <div className="relative w-4 h-4 mx-auto" onClick={() => alert("clicked")}>
                          <img
                            className="absolute w-[13px] h-4 top-0 left-px"
                            alt="Group"
                            src={deleteIcon}
                          />
                        </div>
                      
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.rowItem}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.rowUom}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.process}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.item}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                      {row.consPercentage}
                    </TableCell>
                    <TableCell
                      className={`font-medium text-[#505050] ${index === 4 || index === 6 ? "text-foundation-greygrey-400 font-mulish-14-sp-medium" : ""}`}
                    >
                      {row.avg}
                    </TableCell>
                    <TableCell
                      className={`font-medium text-[#505050] ${index === 4 || index === 6 ? "text-foundation-greygrey-400 font-mulish-14-sp-medium" : ""} ${index === 9 ? "text-right" : ""}`}
                    >
                      {row.pLossPercentage}
                    </TableCell>
                    <TableCell
                      className={`font-medium text-[#505050] ${index === 4 || index === 6 ? "text-foundation-greygrey-400 font-mulish-14-sp-medium" : ""} ${index === 9 ? "text-right" : ""}`}
                    >
                      {row.processItem}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-semibold text-foundationgreygrey-300 text-right">
                      {row.uom}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="h-[50px] bg-[#e3f9ff]"></div>

            {/* Progress bar at the bottom */}
            <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
              <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
