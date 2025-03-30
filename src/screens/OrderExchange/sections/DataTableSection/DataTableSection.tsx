import { TrashIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const DataTableSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
    {
      id: 1,
      country: "India",
      color: "gry",
      date: "22/09/25",
      size: '12"',
      quantity: 12,
      excess: "5%",
      poNumber: "8600.00",
    },
    {
      id: 2,
      country: "America",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 4,
      excess: "12%",
      poNumber: "4610.00",
    },
    {
      id: 3,
      country: "Spain",
      color: "white",
      date: "22/09/25",
      size: '12"',
      quantity: 345,
      excess: "9%",
      poNumber: "8900.00",
    },
    {
      id: 4,
      country: "Russia",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 6,
      excess: "9%",
      poNumber: "9600.00",
    },
    {
      id: 5,
      country: "Itly",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 88,
      excess: "9%",
      poNumber: "5700.00",
    },
    {
      id: 6,
      country: "America",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 45,
      excess: "9%",
      poNumber: "3820.00",
    },
    {
      id: 7,
      country: "China",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 234,
      excess: "9%",
      poNumber: "3230.00",
    },
    {
      id: 8,
      country: "Romeniya",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 87,
      excess: "9%",
      poNumber: "7950.00",
    },
    {
      id: 9,
      country: "Shree Lanka",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 99,
      excess: "9%",
      poNumber: "2100.00",
    },
    {
      id: 10,
      country: "Viyatnam",
      color: "black",
      date: "22/09/25",
      size: '12"',
      quantity: 1,
      excess: "9%",
      poNumber: "3040.00",
    },
  ];

  // Column headers
  const headers = [
    { id: "select", label: "" },
    { id: "sn", label: "S.N." },
    { id: "country", label: "County Pack" },
    { id: "color", label: "Colour Comb.." },
    { id: "date", label: "Del. Date" },
    { id: "size", label: "Size" },
    { id: "quantity", label: "Quantity" },
    { id: "excess", label: "Excess %" },
    { id: "poNumber", label: "PO/BO Number" },
  ];

  return (
    <div className="w-full mt-8 px-10">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#e3f9ff]">
                  {headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={`py-4 px-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium text-sm ${
                        header.id === "poNumber" ? "text-right" : ""
                      }`}
                    >
                      {header.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="py-4 px-3">
                      <TrashIcon className="w-4 h-4 text-gray-500" />
                    </TableCell>
                    <TableCell className="py-4 px-3 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.id}
                    </TableCell>
                    <TableCell className="py-4 px-4 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.country}
                    </TableCell>
                    <TableCell className="py-4 px-4 font-medium text-[#505050] text-sm">
                      {row.color}
                    </TableCell>
                    <TableCell className="py-4 px-4">
                      <div className="inline-flex items-center gap-3">
                        <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                          {row.date}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-4 font-medium text-[#505050] text-sm">
                      {row.size}
                    </TableCell>
                    <TableCell className="py-4 px-4 font-medium text-[#505050] text-sm">
                      {row.quantity}
                    </TableCell>
                    <TableCell className="py-4 px-4 font-medium text-[#505050] text-sm">
                      {row.excess}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-right">
                      <div className="inline-flex items-center gap-3 justify-end">
                        <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                          {row.poNumber}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
              <div className="relative w-[25%] h-2 ml-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
