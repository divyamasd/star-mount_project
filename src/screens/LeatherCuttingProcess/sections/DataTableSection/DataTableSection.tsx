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

export const DataTableSection = (): JSX.Element => {
  // Table data for mapping
  const sampleData = [
    {
      id: 1,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
      
    },
    {
      id: 2,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 3,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 4,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 5,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 6,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 7,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 8,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 9,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
    },
    {
      id: 10,
      date: "Od47688",
      boNo: "3455",
      routeCard: "Sandeep",
      marketName: "22/09/25",
      leatherQty: "lorem ipsum",
      lotNo: "Lorem ipsum",
      noOfSkins: "23",
      pcs: "3inch",
      estCons: "$55.00",
      toBeLess: "$35620.00",
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
                  <TableHead className="w-[71px] p-3 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    S.N.
                  </TableHead>
                  <TableHead className="w-[194px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Date
                  </TableHead>
                  <TableHead className="w-40 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    BO No./Art No.
                  </TableHead>
                  <TableHead className="w-[171px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Route card
                  </TableHead>
                  <TableHead className="w-[135px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Market Name
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Leather Qty.
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Lot No.
                  </TableHead>
                  <TableHead className="w-32 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    No. of Skins
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Pcs
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Est. Cons
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    To be Less
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
                      {row.date}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.boNo}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.routeCard}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.marketName}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.leatherQty}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.lotNo}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.noOfSkins}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.pcs}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.estCons}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.toBeLess}
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
