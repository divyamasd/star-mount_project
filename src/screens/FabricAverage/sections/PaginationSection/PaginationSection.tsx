import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const PaginationSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
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

  // Group icons for each row
  const groupIcons = [
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-11.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-12.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-13.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-14.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-15.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-16.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-17.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-18.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-19.png",
  ];

  return (
    <section className="w-full my-8">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="w-full">
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
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                  >
                    <TableCell className="p-0 w-[55px]">
                      <div className="flex h-[46px] items-center justify-center pl-2.5 pr-8 py-4">
                        {index === 0 ? (
                          <img
                            className="w-4 h-4"
                            alt="Trash"
                            src="https://c.animaapp.com/m8vgn850ySdIeE/img/trash-1.svg"
                          />
                        ) : (
                          <div className="relative w-4 h-4">
                            <img
                              className="absolute w-[13px] h-4 top-0 left-px"
                              alt="Group"
                              src={groupIcons[index - 1]}
                            />
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 pl-2.5 pr-8 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.id}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.color}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-mulish-14-sp-medium text-foundationgreygrey-300">
                      {row.fabric}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-medium text-[#505050] text-sm">
                      {row.size}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-medium text-[#505050] text-sm">
                      {row.pattAverage}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8">
                      <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                        {row.cadAverage}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-medium text-[#505050] text-sm">
                      {row.cuttExcess}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8 font-medium text-[#505050] text-sm">
                      {row.extraFab}
                    </TableCell>
                    <TableCell className="py-4 pl-4 pr-8">
                      <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300 text-right">
                        {row.dznAverage}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Progress bar at the bottom */}
            <div className="w-full h-[50px] bg-[#e3f9ff]"></div>
            <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
              <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
