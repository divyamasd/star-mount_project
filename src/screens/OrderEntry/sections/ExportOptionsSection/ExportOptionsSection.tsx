import { Trash2Icon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const ExportOptionsSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[436px]">
      <Card className="relative w-full h-[363px] bg-[url(https://c.animaapp.com/m8o62etcI5Wrge/img/image-4.png)] bg-cover bg-center border-0">
        <div className="flex w-full items-center justify-between pt-8 pb-0 px-4">
          <Badge className="flex items-center gap-1 px-2 py-1 bg-foundation-successsuccess-50 text-foundation-successsuccess-500 border-[0.5px] border-solid border-[#0ba700] rounded-3xl">
            <img
              className="w-4 h-4"
              alt="Discount shape"
              src="https://c.animaapp.com/m8o62etcI5Wrge/img/discount-shape.svg"
            />
            <span className="font-mulish-12-sp-medium text-foundation-successsuccess-500">
              2 Colour Added
            </span>
          </Badge>

          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 p-0 bg-foundation-greygrey-100 rounded-full"
          >
            <Trash2Icon className="w-5 h-5" />
          </Button>
        </div>

        <div className="absolute w-[69px] h-[79px] bottom-4 left-4">
          <div className="absolute w-[67px] h-[67px] top-3 left-0 bg-white rounded-[33.56px] shadow-[0px_4px_4px_#00000040]">
            <div className="relative w-[53px] h-[53px] top-2 left-[7px] bg-[#bbf8ff87] rounded-[26.43px]" />
          </div>

          <div className="absolute w-[11px] top-0 left-[41px] rotate-180 font-['Mulish',Helvetica] font-bold text-[#2c97cd] text-[64px] leading-normal whitespace-nowrap">
            +
          </div>
        </div>
      </Card>
    </div>
  );
};
