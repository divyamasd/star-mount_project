import { TrashIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const ProcessListSection = (): JSX.Element => {
  // Data for the table rows
  const processData = [
    {
      id: 1,
      process: "shtiching",
      component: "Cap",
      processRate: "665",
      productCost: "556",
      processNo: "556",
      hsnCode: "65657",
    },
    {
      id: 2,
      process: "shtiching",
      component: "Shirt",
      processRate: "45",
      productCost: "34",
      processNo: "55",
      hsnCode: "65657",
    },
    {
      id: 3,
      process: "shtiching",
      component: "Paint",
      processRate: "7",
      productCost: "65",
      processNo: "34",
      hsnCode: "65657",
    },
    {
      id: 4,
      process: "shtiching",
      component: "jeans",
      processRate: "89",
      productCost: "87",
      processNo: "667",
      hsnCode: "65657",
    },
    {
      id: 5,
      process: "shtiching",
      component: "tshirt",
      processRate: "32",
      productCost: "54",
      processNo: "67",
      hsnCode: "65657",
    },
    {
      id: 6,
      process: "shtiching",
      component: "cap",
      processRate: "54",
      productCost: "32",
      processNo: "90",
      hsnCode: "65657",
    },
    {
      id: 7,
      process: "shtiching",
      component: "jacket",
      processRate: "56",
      productCost: "21",
      processNo: "33",
      hsnCode: "65657",
    },
    {
      id: 8,
      process: "shtiching",
      component: "shirt",
      processRate: "67",
      productCost: "09",
      processNo: "22",
      hsnCode: "65657",
    },
    {
      id: 9,
      process: "shtiching",
      component: "shirt",
      processRate: "88",
      productCost: "56",
      processNo: "1",
      hsnCode: "65657",
    },
    {
      id: 10,
      process: "shtiching",
      component: "shirt",
      processRate: "66",
      productCost: "45",
      processNo: "44",
      hsnCode: "65657",
    },
  ];

  return (
    <section className="w-full mt-8">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
              <TableHeader className="bg-[#e3f9ff]">
                <TableRow>
                  <TableCell className="w-12 p-3">
                    <TrashIcon className="w-4 h-4" />
                  </TableCell>
                  <TableCell className="w-16 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    S.N.
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Process
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Component
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Process Rate
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    PCS /Product Cost
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Process No.
                  </TableCell>
                  <TableCell className="p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium text-right">
                    HSN Code
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="p-2.5">
                      <div className="flex justify-center">
                        <Checkbox id={`check-${row.id}`} />
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-[#6c6c6c] font-mulish-14-sp-medium">
                      {row.id}
                    </TableCell>
                    <TableCell className="p-4 text-[#6c6c6c] font-mulish-14-sp-medium">
                      {row.process}
                    </TableCell>
                    <TableCell className="p-4 text-[#505050] font-medium text-sm">
                      {row.component}
                    </TableCell>
                    <TableCell className="p-4 text-[#505050] font-medium text-sm">
                      {row.processRate}
                    </TableCell>
                    <TableCell className="p-4 text-[#6c6c6c] font-mulish-14-sp-semibold">
                      {row.productCost}
                    </TableCell>
                    <TableCell className="p-4 text-[#505050] font-medium text-sm">
                      {row.processNo}
                    </TableCell>
                    <TableCell className="p-4 text-[#6c6c6c] font-mulish-14-sp-semibold text-right">
                      {row.hsnCode}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="w-full h-[50px] bg-[#e3f9ff]"></div>

            <div className="w-full h-2 bg-[#ededed] rounded-[0px_0px_16px_0px] overflow-hidden">
              <div className="relative w-[349px] h-2 ml-[15px] bg-foundation-greygrey-100 rounded-[9px]"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
