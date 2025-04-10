import { PaginationControls } from "../../../../components/Pagination/Pagination";
import React, {useState} from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import deleteIcon from "../../../../../public/deleteIcon.png";

export const PaginationSection = (): JSX.Element => {
  // Table data for mapping
  const sampleData = [
    {
      id: 1,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 2,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 3,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 4,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 5,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 6,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 7,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 8,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 9,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
    {
      id: 10,
      type: "red",
      process: "5cm",
      itemCode: "665",
      uom: "556",
      req: "red",
      ordered: "556",
      allocated: "red",
      used: "5cm",
      unallocated: "67",
      processing: "67",
      production: "67",
    },
  ];
  const [tableData, settableData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = tableData.slice(startIdx, endIdx);

  return (
    <section className="w-full px-10 my-6">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
          <Table>
            <TableHeader className="bg-[#e3f9ff]">
              <TableRow>
                <TableCell className="w-[55px] p-0 rounded-tl-2xl">
                  <div className="h-12 flex items-center justify-center bg-[#e3f9ff] rounded-tl-2xl"></div>
                </TableCell>
                <TableCell className="w-[70px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  S.N.
                </TableCell>
                <TableCell className="w-[125px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Type
                </TableCell>
                <TableCell className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Process
                </TableCell>
                <TableCell className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Item code
                </TableCell>
                <TableCell className="w-[119px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  UOM
                </TableCell>
                <TableCell className="w-[135px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Req.
                </TableCell>
                <TableCell className="w-[123px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Ordered
                </TableCell>
                <TableCell className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Allocated
                </TableCell>
                <TableCell className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Unallocated
                </TableCell>
                <TableCell className="w-[121px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 pr-4">
                  Processing
                </TableCell>
                <TableCell className="w-[121px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 pr-4">
                  Production
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                >
                  <TableCell className="p-0 pl-3 py-4 h-[46px]" onClick={() => alert("clicked")}>
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute w-[13px] h-4 top-0 left-px"
                        alt="Group"
                        src={deleteIcon}
                      />
                    </div>
                    </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.id}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.type}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.process}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.itemCode}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                    {row.uom}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.req}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.ordered}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.allocated}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.used}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c] text-right">
                    {row.unallocated}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c] text-right">
                    {row.processing}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c] text-right">
                    {row.production}
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

          {/* Pagination controls */}
          
        </CardContent>
      </Card>
      <PaginationControls
            currentPage={currentPage}
            totalItems={tableData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={(count) => {
              setItemsPerPage(count);
              setCurrentPage(1); // Reset to first page on limit change
            }}
          />
    </section>
  );
};



