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
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 2,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 3,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 4,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 5,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 6,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 7,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 8,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 9,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
    },
    {
      id: 10,
      country: "Paras Ecommerce Russia",
      color: "Red Rose Mary",
      size: "55'",
      barcode: "123456",
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
                  Country
                </TableCell>
                <TableCell className="w-[125px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Color
                </TableCell>
                <TableCell className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Size
                </TableCell>
                <TableCell className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Barcode
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
                    {row.country}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.color}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.size}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                    {row.barcode}
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



