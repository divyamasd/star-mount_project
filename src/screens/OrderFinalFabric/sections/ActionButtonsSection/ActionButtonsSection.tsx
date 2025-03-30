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

export const ActionButtonsSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
    {
      id: 1,
      component: "Component A...",
      color: "gry",
      allowed: "Yes",
      date: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "8600.00",
    },
    {
      id: 2,
      component: "Component A...",
      color: "black",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "4610.00",
    },
    {
      id: 3,
      component: "Component A...",
      color: "white",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "8900.00",
    },
    {
      id: 4,
      component: "Component A...",
      color: "black",
      allowed: "Yes",
      date: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "9600.00",
    },
    {
      id: 5,
      component: "Component A...",
      color: "black",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "5700.00",
    },
    {
      id: 6,
      component: "Component A...",
      color: "black",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3820.00",
    },
    {
      id: 7,
      component: "Component A......",
      color: "black",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3230.00",
    },
    {
      id: 8,
      component: "Component A...",
      color: "black",
      allowed: "Yes",
      date: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "7950.00",
    },
    {
      id: 9,
      component: "Component A...",
      color: "black",
      allowed: "Yes",
      date: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "2100.00",
    },
    {
      id: 10,
      component: "Component A...",
      color: "black",
      allowed: "No",
      date: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3040.00",
    },
  ];

  // Icons for the first column
  const iconUrls = [
    "https://c.animaapp.com/m8smldcxonxJt0/img/trash-1.svg",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-2.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-3.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-4.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-5.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-6.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-7.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-8.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-9.png",
    "https://c.animaapp.com/m8smldcxonxJt0/img/group-10.png",
  ];

  return (
    <section className="w-full mt-8">
      <Card className="border border-[#ededed] rounded-2xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#e3f9ff]">
              <TableRow>
                <TableHead className="w-[55px] rounded-tl-2xl p-3 text-center">
                  <TrashIcon className="w-4 h-4 mx-auto" />
                </TableHead>
                <TableHead className="w-[71px] p-3 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  S.N.
                </TableHead>
                <TableHead className="w-[194px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Component
                </TableHead>
                <TableHead className="w-40 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Colour Comb..
                </TableHead>
                <TableHead className="w-[171px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  BO No.#/Art#Allowed
                </TableHead>
                <TableHead className="w-[135px] p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Del. Date
                </TableHead>
                <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  4
                </TableHead>
                <TableHead className="w-36 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  5/6
                </TableHead>
                <TableHead className="w-32 p-4 text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  7/8
                </TableHead>
                <TableHead className="w-[159px] p-4 text-right rounded-tr-2xl text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium">
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 1 ? "bg-[#e9e9e966]" : ""}
                >
                  <TableCell className="p-3 text-center">
                    {index === 0 ? (
                      <img
                        className="w-4 h-4 mx-auto"
                        alt="Trash"
                        src={iconUrls[0]}
                      />
                    ) : (
                      <div className="relative w-4 h-4 mx-auto">
                        <img
                          className="absolute w-[13px] h-4 top-0 left-px"
                          alt="Group"
                          src={iconUrls[index]}
                        />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="p-2.5 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                    {row.id}
                  </TableCell>
                  <TableCell className="p-4 text-foundationgreygrey-300 font-mulish-14-sp-medium">
                    {row.component}
                  </TableCell>
                  <TableCell className="p-4 text-[#505050] text-sm font-medium">
                    {row.color}
                  </TableCell>
                  <TableCell className="p-4 text-[#505050] text-sm font-medium">
                    {row.allowed}
                  </TableCell>
                  <TableCell className="p-4">
                    <div className="inline-flex items-center gap-3">
                      <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                        {row.date}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 text-[#505050] text-sm font-medium">
                    {row.col4}
                  </TableCell>
                  <TableCell className="p-4 text-[#505050] text-sm font-medium">
                    {row.col56}
                  </TableCell>
                  <TableCell className="p-4 text-[#505050] text-sm font-medium">
                    {row.col78}
                  </TableCell>
                  <TableCell className="p-4 text-right">
                    <div className="inline-flex items-center gap-3 justify-end">
                      <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                        {row.total}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
            <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
