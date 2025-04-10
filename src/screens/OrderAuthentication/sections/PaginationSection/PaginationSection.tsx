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
  
  const [tableData, settableData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = tableData.slice(startIdx, endIdx);

  return (
    <section className="w-full my-6">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#e3f9ff]">
                  <TableHead className="w-[55px] rounded-tl-2xl p-0">
                    <div className="h-12 flex items-center justify-center rounded-tl-2xl bg-[#e3f9ff]"></div>
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
                {currentData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="p-0 pl-3 py-4 h-[46px]" onClick={() => alert("clicked")}>
                    <div className="relative w-4 h-4" onClick={() => alert("clicked")}>
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




