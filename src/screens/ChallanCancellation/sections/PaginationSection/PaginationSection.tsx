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
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 2,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 3,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 4,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 5,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 6,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 7,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 8,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 9,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
    },
    {
      id: 10,
      challanNo: "red",
      dispatchNote: "5cm",
      challanDcs: "665",
      challanDate: "556",
      qty: "red",
      vendorName: "556",
      status: "red",
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
                  Challan No.
                </TableCell>
                <TableCell className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Dispatch Note
                </TableCell>
                <TableCell className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Challan Dcs
                </TableCell>
                <TableCell className="w-[119px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Challan Date
                </TableCell>
                <TableCell className="w-[135px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Qty.
                </TableCell>
                <TableCell className="w-[123px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Vendor Name
                </TableCell>
                <TableCell className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Status
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
                    {row.challanNo}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.dispatchNote}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.challanDcs}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                    {row.challanDate}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.qty}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.vendorName}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.status}
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



