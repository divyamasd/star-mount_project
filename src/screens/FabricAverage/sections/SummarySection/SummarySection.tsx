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

export const SummarySection = (): JSX.Element => {
  // Table data
  const tableData = [
    {
      id: 1,
      color: "red",
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
      size: "4cm",
      pattAverage: "66",
      cadAverage: "45",
      cuttExcess: "44",
      extraFab: "23",
      dznAverage: "33",
    },
  ];

  // Icons for the first column
  const rowIcons = [
    "https://c.animaapp.com/m8vgn850ySdIeE/img/trash-1.svg",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-2.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-3.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-4.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-5.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-6.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-7.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-8.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-9.png",
    "https://c.animaapp.com/m8vgn850ySdIeE/img/group-10.png",
  ];

  return (
    <div className="w-full mt-8">
      <Card className="border border-solid border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <Table>
              <TableHeader className="bg-[#e3f9ff]">
                <TableRow>
                  <TableHead className="w-[55px] rounded-tl-2xl p-0">
                    <div className="h-12 flex items-center justify-center bg-[#e3f9ff] rounded-tl-2xl"></div>
                  </TableHead>
                  <TableHead className="w-[95px] p-3 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    S.N.
                  </TableHead>
                  <TableHead className="w-[241px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Colour
                  </TableHead>
                  <TableHead className="w-44 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Size
                  </TableHead>
                  <TableHead className="w-[187px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Patt. Average
                  </TableHead>
                  <TableHead className="w-[151px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Cad. Average
                  </TableHead>
                  <TableHead className="w-[152px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Cutt Excess
                  </TableHead>
                  <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                    Extra Fab
                  </TableHead>
                  <TableHead className="w-[159px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
                    DZN Average
                  </TableHead>
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
                            src={rowIcons[index]}
                          />
                        ) : (
                          <div className="relative w-4 h-4">
                            <img
                              className="absolute w-[13px] h-4 top-0 left-px"
                              alt="Group"
                              src={rowIcons[index]}
                            />
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="p-2.5 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.id}
                    </TableCell>
                    <TableCell className="p-4 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.color}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.size}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.pattAverage}
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="inline-flex items-center gap-3">
                        <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                          {row.cadAverage}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.cuttExcess}
                    </TableCell>
                    <TableCell className="p-4 font-medium text-[#505050] text-sm">
                      {row.extraFab}
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="inline-flex items-center gap-3 justify-end w-full">
                        <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                          {row.dznAverage}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="w-full h-[50px] bg-[#e3f9ff]"></div>

            <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
              <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
