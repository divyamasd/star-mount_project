import { TrashIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const PaginationSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
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

  return (
    <div className="w-full h-[566px] rounded-2xl border border-solid border-[#ededed] bg-white">
      <div className="w-full h-full relative">
        <div className="w-full overflow-hidden rounded-2xl">
          <Table>
            <TableHeader className="bg-[#e3f9ff]">
              <TableRow>
                <TableHead className="w-[55px] p-0">
                  <div className="flex items-center justify-center h-12">
                    <TrashIcon className="w-4 h-4 text-gray-600" />
                  </div>
                </TableHead>
                <TableHead className="w-[70px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  S.N.
                </TableHead>
                <TableHead className="w-[125px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Trim
                </TableHead>
                <TableHead className="w-44 font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Brand Type
                </TableHead>
                <TableHead className="w-[187px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Sub Description
                </TableHead>
                <TableHead className="w-[119px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Trim Type
                </TableHead>
                <TableHead className="w-[135px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Trim Colour
                </TableHead>
                <TableHead className="w-[123px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Country Code
                </TableHead>
                <TableHead className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Colour/Combo
                </TableHead>
                <TableHead className="w-[127px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900">
                  Size
                </TableHead>
                <TableHead className="w-[121px] font-mulish-14-sp-medium text-foundationprimary-yellowyellow-900 text-right pr-4">
                  UOM
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                >
                  <TableCell className="p-0">
                    <div className="flex items-center justify-center h-[46px]">
                      <Checkbox id={`select-${row.id}`} />
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
        </div>

        {/* Progress bar at the bottom */}
        <div className="absolute w-full h-2 bottom-0 left-0 bg-[#ededed] rounded-[0px_0px_16px_0px] overflow-hidden">
          <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
        </div>
      </div>
    </div>
  );
};
