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

export const SummarySection = (): JSX.Element => {
  // Data for the table rows
  const tableData = [
    { id: 1, finalItem: "Computer", reqQty: "12", rawUom: "MTR", rate: "100" },
    { id: 2, finalItem: "Computer", reqQty: "4", rawUom: "MTR", rate: "100" },
    { id: 3, finalItem: "Computer", reqQty: "345", rawUom: "MTR", rate: "100" },
    { id: 4, finalItem: "Computer", reqQty: "6", rawUom: "MTR", rate: "100" },
    { id: 5, finalItem: "Computer", reqQty: "88", rawUom: "MTR", rate: "100" },
    { id: 6, finalItem: "Computer", reqQty: "45", rawUom: "MTR", rate: "100" },
    { id: 7, finalItem: "Computer", reqQty: "234", rawUom: "MTR", rate: "100" },
    { id: 8, finalItem: "Computer", reqQty: "87", rawUom: "MTR", rate: "100" },
    { id: 9, finalItem: "Computer", reqQty: "99", rawUom: "MTR", rate: "100" },
    { id: 10, finalItem: "Computer", reqQty: "1", rawUom: "MTR", rate: "100" },
  ];

  // Icons for each row
  const rowIcons = [
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/trash-1.svg",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-2.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-3.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-4.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-5.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-6.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-7.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-8.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-9.png",
    "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-10.png",
  ];

  return (
    <section className="w-full mt-[267px] px-10">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#e3f9ff]">
                <TableHead className="w-[88px] rounded-tl-2xl p-0">
                  <div className="h-12 bg-[#e3f9ff] rounded-[16px_0px_0px_0px]"></div>
                </TableHead>
                <TableHead className="w-[218px] pl-4 pr-8 py-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Chick
                </TableHead>
                <TableHead className="w-[285px] pl-3 pr-8 py-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Final Item
                </TableHead>
                <TableHead className="w-[231px] pl-4 pr-8 py-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Req. Qty.
                </TableHead>
                <TableHead className="w-60 pl-4 pr-8 py-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Raw UOM
                </TableHead>
                <TableHead className="w-[297px] p-4 rounded-tr-2xl text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Rate
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                >
                  <TableCell className="p-0">
                    <div className="flex h-[46px] items-center pl-2.5 pr-8 py-4">
                      {index === 0 ? (
                        <TrashIcon className="w-4 h-4" />
                      ) : (
                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-[13px] h-4 top-0 left-px"
                            alt="Group"
                            src={rowIcons[index]}
                          />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="pl-4 pr-8 py-4 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                    {row.id}
                  </TableCell>
                  <TableCell className="pl-2.5 pr-8 py-4 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                    {row.finalItem}
                  </TableCell>
                  <TableCell className="pl-4 pr-8 py-4 text-[#505050] font-medium text-sm">
                    {row.reqQty}
                  </TableCell>
                  <TableCell className="pl-4 pr-8 py-4 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                    {row.rawUom}
                  </TableCell>
                  <TableCell className="p-4">
                    <div className="inline-flex items-center gap-3">
                      <div className="text-foundationgreygrey-300 font-mulish-14-sp-semibold">
                        {row.rate}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="h-[50px] bg-[#e3f9ff]"></div>

          <div className="h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
            <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]"></div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
