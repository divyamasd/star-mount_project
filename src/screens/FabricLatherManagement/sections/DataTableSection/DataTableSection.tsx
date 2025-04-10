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
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "$55.00",
      amount: "$35620.00",
      disc: "15%",
      hsn: "H2357",
      cgst: "15%",
      cgstAmoount: "$56.00",
    },
    {
      id: 2,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 3,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 4,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 5,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 6,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 7,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 8,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 9,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
    },
    {
      id: 10,
      orderNo: "Od47688",
      styleNo: "3455",
      purchaseNmae: "Sandeep",
      orderDate: "22/09/25",
      fabric: "lorem ipsum",
      fabricLatherType: "Lorem ipsum",
      rowQty: "23",
      uom: "3inch",
      price: "3inch",
      amount: "3inch",
      disc: "3inch",
      hsn: "3inch",
      cgst: "3inch",
      cgstAmoount: "3inch",
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
                    Order No.
                  </TableHead>
                  <TableHead className="w-40 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Style No.
                  </TableHead>
                  <TableHead className="w-[171px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Purchase Name
                  </TableHead>
                  <TableHead className="w-[135px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Order Date
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Fabric
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Fabric/Lather type
                  </TableHead>
                  <TableHead className="w-32 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Row Qty.
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    UOM
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Price
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Amount
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    Disc%
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    HSN
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    CGST%
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    CSGT Amount
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
                      {row.orderNo}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.styleNo}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.purchaseNmae}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.orderDate}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.fabric}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.fabricLatherType}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.rowQty}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.uom}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.price}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.amount}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.disc}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.hsn}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.cgst}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#90EE90] font-medium text-sm">
                      {row.cgstAmoount}
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
