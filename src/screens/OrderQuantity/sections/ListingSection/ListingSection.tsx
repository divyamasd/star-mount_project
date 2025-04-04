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

export const ListingSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
    {
      id: 1,
      component: "Component A...",
      color: "gry",
      boAllowed: "Yes",
      delDate: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "8600.00",
    },
    {
      id: 2,
      component: "Component A...",
      color: "black",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "4610.00",
    },
    {
      id: 3,
      component: "Component A...",
      color: "white",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "8900.00",
    },
    {
      id: 4,
      component: "Component A...",
      color: "black",
      boAllowed: "Yes",
      delDate: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "9600.00",
    },
    {
      id: 5,
      component: "Component A...",
      color: "black",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "5700.00",
    },
    {
      id: 6,
      component: "Component A...",
      color: "black",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3820.00",
    },
    {
      id: 7,
      component: "Component A......",
      color: "black",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3230.00",
    },
    {
      id: 8,
      component: "Component A...",
      color: "black",
      boAllowed: "Yes",
      delDate: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "7950.00",
    },
    {
      id: 9,
      component: "Component A...",
      color: "black",
      boAllowed: "Yes",
      delDate: "22/09/25",
      col4: "Yes",
      col56: "Yes",
      col78: "Yes",
      total: "2100.00",
    },
    {
      id: 10,
      component: "Component A...",
      color: "black",
      boAllowed: "No",
      delDate: "22/09/25",
      col4: "No",
      col56: "No",
      col78: "No",
      total: "3040.00",
    },
  ];

  // Group icons for each row
  const getGroupIcon = (id: number) => {
    return (
      <div className="relative w-4 h-4">
        <img
          className="absolute w-[13px] h-4 top-0 left-px"
          alt="Group"
          src={`https://c.animaapp.com/m8o7e9ng9ZZS14/img/group-${id + 1}.png`}
        />
      </div>
    );
  };

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
                  <TableHead className="w-[159px] p-4 text-right text-foundationprimary-yellowyellow-900 font-mulish-14-sp-medium rounded-tr-2xl">
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
                    <TableCell className="p-0 pl-3 py-4 h-[46px]">
                      {index === 0 ? (
                        <TrashIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        getGroupIcon(index)
                      )}
                    </TableCell>
                    <TableCell className="p-2.5 h-[46px] text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.id}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-foundationgreygrey-300 font-mulish-14-sp-medium">
                      {row.component}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.color}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.boAllowed}
                    </TableCell>
                    <TableCell className="p-4 h-[46px]">
                      <div className="inline-flex items-center gap-3">
                        <div className="font-mulish-14-sp-semibold text-foundationgreygrey-300">
                          {row.delDate}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.col4}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.col56}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-[#505050] font-medium text-sm">
                      {row.col78}
                    </TableCell>
                    <TableCell className="p-4 h-[46px] text-right">
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

            {/* Progress bar at the bottom */}
            <div className="w-full h-2 bg-[#ededed] rounded-b-2xl overflow-hidden">
              <div className="relative w-[349px] h-2 left-[15px] bg-foundation-greygrey-100 rounded-[9px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
