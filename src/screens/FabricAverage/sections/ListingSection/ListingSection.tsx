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

export const ListingSection = (): JSX.Element => {
  // Table data for mapping
  const sampleData = [
    {
      id: 1,
      color: "red",
      fabric: "cotton",
      size: "5cm",
      pattAverage: "665",
      cadAverage: "556",
      cuttExcess: "556",
      extraFab: "11",
      dznAverage: "67",
    },
    {
      id: 2,
      color: "white",
      fabric: "polyester",
      size: "50inch",
      pattAverage: "45",
      cadAverage: "34",
      cuttExcess: "55",
      extraFab: "22",
      dznAverage: "45",
    },
    {
      id: 3,
      color: "black",
      fabric: "cotton",
      size: "4inch",
      pattAverage: "7",
      cadAverage: "65",
      cuttExcess: "34",
      extraFab: "55",
      dznAverage: "55",
    },
    {
      id: 4,
      color: "green",
      fabric: "cotton",
      size: "3mtr",
      pattAverage: "89",
      cadAverage: "87",
      cuttExcess: "667",
      extraFab: "66",
      dznAverage: "88",
    },
    {
      id: 5,
      color: "green",
      fabric: "cotton",
      size: "45mtr",
      pattAverage: "32",
      cadAverage: "54",
      cuttExcess: "67",
      extraFab: "7",
      dznAverage: "22",
    },
    {
      id: 6,
      color: "black",
      fabric: "cotton",
      size: "4inch",
      pattAverage: "54",
      cadAverage: "32",
      cuttExcess: "90",
      extraFab: "88",
      dznAverage: "88",
    },
    {
      id: 7,
      color: "white",
      fabric: "cotton",
      size: "4cm",
      pattAverage: "56",
      cadAverage: "21",
      cuttExcess: "33",
      extraFab: "99",
      dznAverage: "33",
    },
    {
      id: 8,
      color: "black",
      fabric: "cotton",
      size: "78inch",
      pattAverage: "67",
      cadAverage: "09",
      cuttExcess: "22",
      extraFab: "44",
      dznAverage: "56",
    },
    {
      id: 9,
      color: "green",
      fabric: "cotton",
      size: "3inch",
      pattAverage: "88",
      cadAverage: "56",
      cuttExcess: "1",
      extraFab: "34",
      dznAverage: "55",
    },
    {
      id: 10,
      color: "pink",
      fabric: "cotton",
      size: "4cm",
      pattAverage: "66",
      cadAverage: "45",
      cuttExcess: "44",
      extraFab: "23",
      dznAverage: "33",
    },
  ];
  const [tableData, settableData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = tableData.slice(startIdx, endIdx);

  return (
    <section className="mx-10 my-6">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
            <TableHeader className="bg-[#e3f9ff]">
                <TableRow>
                  <TableCell className="w-[55px] p-0 rounded-tl-2xl">
                    <div className="h-12 flex items-center justify-center bg-[#e3f9ff] rounded-tl-2xl"></div>
                  </TableCell>
                  <TableCell className="py-4 pl-3 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    S.N.
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Colour
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Fabric
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Size
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Patt. Average
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Cad. Average
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Cutt Excess
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                    Extra Fab
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 rounded-tr-2xl">
                    DZN Average
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
                    <TableCell className="p-2.5 h-[46px] text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.id}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.color}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.fabric}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.size}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.pattAverage}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.cadAverage}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.cuttExcess}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.extraFab}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.dznAverage}
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


