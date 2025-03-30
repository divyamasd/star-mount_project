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

// Table data for mapping
const tableData = [
  {
    id: 1,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 12,
    balanceOrder: "xyz",
    processItem: "Tshit",
    errorMessage: "lorem ipsum",
  },
  {
    id: 2,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 4,
    balanceOrder: "xyz",
    processItem: "Lower",
    errorMessage: "lorem ipsum",
  },
  {
    id: 3,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 24,
    balanceOrder: "xyz",
    processItem: "Jacket",
    errorMessage: "lorem ipsum",
  },
  {
    id: 4,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 6,
    balanceOrder: "xyz",
    processItem: "shirt",
    errorMessage: "lorem ipsum",
  },
  {
    id: 5,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 5,
    balanceOrder: "xyz",
    processItem: "female top",
    errorMessage: "lorem ipsum",
  },
  {
    id: 6,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 18,
    balanceOrder: "xyz",
    processItem: "jeans",
    errorMessage: "lorem ipsum",
  },
  {
    id: 7,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 33,
    balanceOrder: "xyz",
    processItem: "shirt",
    errorMessage: "lorem ipsum",
  },
  {
    id: 8,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 8,
    balanceOrder: "xyz",
    processItem: "lower",
    errorMessage: "lorem ipsum",
  },
  {
    id: 9,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 9,
    balanceOrder: "xyz",
    processItem: "sleeve top",
    errorMessage: "lorem ipsum",
  },
  {
    id: 10,
    type: "loerm ipsum",
    item: "Ready Fabric",
    uom: "Inch",
    reqQty: 100,
    allocQty: 12,
    usedQty: 1,
    balanceOrder: "xyz",
    processItem: "paint",
    errorMessage: "lorem ipsum",
  },
];

// Icons for the first column
const iconUrls = [
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/trash-1.svg",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-20.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-21.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-22.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-23.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-24.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-25.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-26.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-27.png",
  "https://c.animaapp.com/m8vgbs93FlyGpM/img/group-28.png",
];

export const ActionButtonsSection = (): JSX.Element => {
  return (
    <section className="w-full my-8">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#e3f9ff]">
                  <TableHead className="w-[55px] p-3 rounded-tl-2xl">
                    <span className="sr-only">Icon</span>
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Type
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Item
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    UOM
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Req. Qty.
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Alloc. Qty.
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Used Qty.
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Balance Order
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Process Item
                  </TableHead>
                  <TableHead className="p-4 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 rounded-tr-2xl">
                    Error Massage
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="p-3 w-[55px]">
                      {index === 0 ? (
                        <TrashIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-[13px] h-4 top-0 left-px"
                            alt="Group"
                            src={iconUrls[index]}
                          />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.type}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.item}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.uom}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-semibold text-foundationgreygrey-300">
                      {row.reqQty}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.allocQty}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.usedQty}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.balanceOrder}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.processItem}
                    </TableCell>
                    <TableCell className="p-4 font-mulish-14-sp-semibold text-foundationgreygrey-300">
                      {row.errorMessage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="h-2 bg-[#ededed] rounded-b-2xl relative">
            <div className="w-[349px] h-2 ml-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
