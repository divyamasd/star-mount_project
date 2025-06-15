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
      trim: "red",
      brandType: "5cm",
      subDescription: "665",
      trimType: "556",
      trimColour: "red",
      countryCode: "556",
      colourCombo: "red",
      size: "5cm",
      uom: "67",
    },
    {
      id: 2,
      trim: "white",
      brandType: "50inch",
      subDescription: "45",
      trimType: "34",
      trimColour: "white",
      countryCode: "55",
      colourCombo: "white",
      size: "50inch",
      uom: "45",
    },
    {
      id: 3,
      trim: "black",
      brandType: "4inch",
      subDescription: "7",
      trimType: "65",
      trimColour: "black",
      countryCode: "34",
      colourCombo: "black",
      size: "4inch",
      uom: "55",
    },
    {
      id: 4,
      trim: "green",
      brandType: "3mtr",
      subDescription: "89",
      trimType: "87",
      trimColour: "green",
      countryCode: "667",
      colourCombo: "green",
      size: "3mtr",
      uom: "88",
    },
    {
      id: 5,
      trim: "green",
      brandType: "45mtr",
      subDescription: "32",
      trimType: "54",
      trimColour: "green",
      countryCode: "67",
      colourCombo: "green",
      size: "45mtr",
      uom: "22",
    },
    {
      id: 6,
      trim: "black",
      brandType: "4inch",
      subDescription: "54",
      trimType: "32",
      trimColour: "black",
      countryCode: "90",
      colourCombo: "black",
      size: "4inch",
      uom: "88",
    },
    {
      id: 7,
      trim: "white",
      brandType: "4cm",
      subDescription: "56",
      trimType: "21",
      trimColour: "white",
      countryCode: "33",
      colourCombo: "white",
      size: "4cm",
      uom: "33",
    },
    {
      id: 8,
      trim: "black",
      brandType: "78inch",
      subDescription: "67",
      trimType: "09",
      trimColour: "black",
      countryCode: "22",
      colourCombo: "black",
      size: "78inch",
      uom: "56",
    },
    {
      id: 9,
      trim: "green",
      brandType: "3inch",
      subDescription: "88",
      trimType: "56",
      trimColour: "green",
      countryCode: "1",
      colourCombo: "green",
      size: "3inch",
      uom: "55",
    },
    {
      id: 10,
      trim: "pink",
      brandType: "4cm",
      subDescription: "66",
      trimType: "45",
      trimColour: "pink",
      countryCode: "44",
      colourCombo: "pink",
      size: "4cm",
      uom: "33",
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
                  Trim
                </TableCell>
                <TableCell className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Brand Type
                </TableCell>
                <TableCell className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Sub Description
                </TableCell>
                <TableCell className="w-[119px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Trim Type
                </TableCell>
                <TableCell className="w-[135px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Trim Colour
                </TableCell>
                <TableCell className="w-[123px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Country Code
                </TableCell>
                <TableCell className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Colour/Combo
                </TableCell>
                <TableCell className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Size
                </TableCell>
                <TableCell className="w-[121px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 text-right pr-4">
                  UOM
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
                    {row.trim}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.brandType}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.subDescription}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c]">
                    {row.trimType}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.trimColour}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.countryCode}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-medium text-[#6c6c6c]">
                    {row.colourCombo}
                  </TableCell>
                  <TableCell className="font-medium text-[#505050] text-sm">
                    {row.size}
                  </TableCell>
                  <TableCell className="font-mulish-14-sp-semibold text-[#6c6c6c] text-right">
                    {row.uom}
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



