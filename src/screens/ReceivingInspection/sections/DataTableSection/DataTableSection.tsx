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
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 2,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 3,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 4,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 5,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 6,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 7,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 8,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 9,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
    },
    {
      id: 10,
      poNo: "Od47688",
      rcvStore: "3455",
      rcvBin: "Sandeep",
      hsn: "22/09/25",
      item: "lorem ipsum",
      uom: "Lorem ipsum",
      balQty: "23",
      balQtyPerPO: "3inch",
      recQty: "$55.00",
      inventoryRate: "$35620.00",
      xyz: "15%",
      amount: "H2357",
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
                    PO No.
                  </TableHead>
                  <TableHead className="w-40 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    RCV store
                  </TableHead>
                  <TableHead className="w-[171px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    RCV Bin
                  </TableHead>
                  <TableHead className="w-[135px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    HSN
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Item
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    UOM
                  </TableHead>
                  <TableHead className="w-32 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Bal Qty.
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Bal Qty. Per PO
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Rec Qty.
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Inventory Rate
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                   
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Amount
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
                      {row.poNo}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.rcvStore}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.rcvBin}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.hsn}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.item}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.uom}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.balQty}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.balQtyPerPO}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.recQty}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.inventoryRate}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.xyz}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.amount}
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
