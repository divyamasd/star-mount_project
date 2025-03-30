import { BellIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

// Navigation menu items data
const navigationItems = [
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/element-plus.svg",
    label: "Order\nManagement",
  },
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/box-search.svg",
    subIcon: "https://c.animaapp.com/m8vgn850ySdIeE/img/group-1039.png",
    label: "Order\nManagement",
  },
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/group-1.png",
    label: "Verification",
  },
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/01-align-center.png",
    label: "Procurement\nModule",
  },
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/scissors-1.svg",
    label: "Cutting\nControl",
  },
  {
    icon: "https://c.animaapp.com/m8vgn850ySdIeE/img/truck-loading-1.svg",
    label: "Production\nControl",
  },
  {
    customIcon: true,
    label: "Challan\nDetail",
  },
];

export const DataTableSection = (): JSX.Element => {
  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex items-center justify-between px-3">
      {/* Logo Section */}
      <div className="flex items-center h-[51px]">
        <div className="relative w-[77px] h-[38.33px]">
          <div className="relative w-[79px] h-[38px]">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Villemont logo"
              src="https://c.animaapp.com/m8vgn850ySdIeE/img/group.png"
            />
            <div className="absolute w-[79px] h-[17px] top-[21px] left-0">
              <div className="relative w-[77px] h-[17px]">
                <div className="absolute top-0 left-0 [font-family:'Marvel',Helvetica] font-bold text-[#9dffa3] text-[13.9px] tracking-[2.64px] leading-[normal]">
                  VILLEMONT
                </div>
                <div className="absolute w-0.5 h-1.5 top-1.5 left-[52px] bg-[#ffe100] rounded-[0.91px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-[18px] ml-8">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-[6.25px] p-0 bg-transparent hover:bg-transparent"
          >
            <div className="flex items-center justify-center p-[7.5px] bg-[#f2fffb] rounded-[11.25px]">
              {item.customIcon ? (
                <div className="relative w-[28.75px] h-[30px] mt-[-2.50px] mb-[-2.50px] ml-[-1.88px] mr-[-1.88px]">
                  <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
                    <div className="relative w-[26px] h-7 -left-px">
                      <img
                        className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                        alt="Setting bulk"
                        src="https://c.animaapp.com/m8vgn850ySdIeE/img/setting-2-bulk.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/m8vgn850ySdIeE/img/vector-1.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/m8vgn850ySdIeE/img/vector.svg"
                      />
                      <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                        <img
                          className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]"
                          alt="Receipt text"
                          src="https://c.animaapp.com/m8vgn850ySdIeE/img/receipt-text.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-[25px] h-[25px]">
                  {item.subIcon ? (
                    <>
                      <div className="relative h-[25px] bg-[url(https://c.animaapp.com/m8vgn850ySdIeE/img/box-search.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-[9px] h-2 top-[15px] left-4"
                          alt="Group"
                          src={item.subIcon}
                        />
                      </div>
                    </>
                  ) : (
                    <img
                      className="w-full h-full"
                      alt={`${item.label} icon`}
                      src={item.icon}
                    />
                  )}
                </div>
              )}
            </div>
            <span className="text-[#f2fffb] text-[12.5px] leading-[12.5px] font-medium font-['Mulish',Helvetica] whitespace-pre-line">
              {item.label}
            </span>
          </Button>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="flex items-center gap-6">
        <Button variant="ghost" className="relative p-0 h-6 w-6">
          <BellIcon className="h-6 w-6 text-white" />
          <span className="absolute w-2 h-2 bg-accentred-500 rounded-full top-0 right-0" />
        </Button>

        <Separator orientation="vertical" className="h-8 bg-white/50" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://c.animaapp.com/m8vgn850ySdIeE/img/image.png"
                alt="User avatar"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-white text-xs font-['Mulish',Helvetica]">
                Anil Sharma
              </span>
              <span className="font-medium text-white text-[10px] leading-[10px] font-['Mulish',Helvetica]">
                Manager
              </span>
            </div>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  );
};
