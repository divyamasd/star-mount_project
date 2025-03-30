import { TrashIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
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
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "Sandeep",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 2,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "roshni",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 3,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "sunil",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 4,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "ATS Power",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 5,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "Divya System",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 6,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "Ravi kumar",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 7,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "Dinesh Sharma",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 8,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "solan pal",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 9,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "deepak",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
  {
    id: 10,
    orderNo: "Od47688",
    styleNo: "3445",
    buyerName: "koshal nath",
    orderDate: "22 july",
    fabricDetail: "lorem ipsum",
    accDetail: "lorem ipsum",
    productionDetails: "lorem ipsum",
    packDetails: "lorem ipsum",
  },
];

export const PaginationSection = (): JSX.Element => {
  return (
    <section className="w-full my-4">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#e3f9ff]">
                <TableRow>
                  <TableHead className="w-12 text-center">
                    <TrashIcon className="w-4 h-4 mx-auto text-[#6c6c6c]" />
                  </TableHead>
                  <TableHead className="w-16 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    S.N.
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Order No.
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Style No.
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Buyer Name
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Order Date
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Fabric Detail
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Acc Detail
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Production Details
                  </TableHead>
                  <TableHead className="text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Pack. Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="text-center">
                      <Checkbox className="mx-auto" />
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.id}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.orderNo}
                    </TableCell>
                    <TableCell className="font-medium text-[#505050]">
                      {row.styleNo}
                    </TableCell>
                    <TableCell className="font-medium text-[#505050]">
                      {row.buyerName}
                    </TableCell>
                    <TableCell>
                      <span className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                        {row.orderDate}
                      </span>
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.fabricDetail}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.accDetail}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.productionDetails}
                    </TableCell>
                    <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                      {row.packDetails}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center h-10 bg-[#e3f9ff]"></div>
          <div className="h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
            <div className="relative w-1/4 h-2 ml-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
