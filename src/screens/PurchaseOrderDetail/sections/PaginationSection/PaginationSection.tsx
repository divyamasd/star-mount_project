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
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 2,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 3,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 4,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 5,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 6,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 7,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 8,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 9,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
    },
    {
      id: 10,
      poNumber: "234",
      poType: "Ravi/Faridabad",
      vendor: "Ravi/Faridabad",
      poDate: "14/03/25",
      closedStatus: "Yes",
      userName: "Done",
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
                  PO No.
                </TableCell>
                <TableCell className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  PO Type
                </TableCell>
                <TableCell className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Vendor
                </TableCell>
                <TableCell className="w-[119px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  PO Date
                </TableCell>
                <TableCell className="w-[135px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Closed Status
                </TableCell>
                <TableCell className="w-[123px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  User Name
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
                    {row.poNumber}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.poType}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.vendor}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                    {row.poDate}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.closedStatus}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.userName}
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



