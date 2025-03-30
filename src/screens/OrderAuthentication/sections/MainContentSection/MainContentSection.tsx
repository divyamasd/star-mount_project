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
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/element-plus.svg",
    label: "Order\nManagement",
    bgColor: "bg-[#f2fffa]",
    active: false,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/box-search.svg",
    subIcon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/group-1039.png",
    label: "Order\nManagement",
    bgColor: "bg-[#f2fffb]",
    active: false,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/group-1.png",
    label: "Verification",
    bgColor: "bg-[#fffae2]",
    active: true,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/01-align-center.png",
    label: "Procurement\nModule",
    bgColor: "bg-[#f2fffb]",
    active: false,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/scissors-1.svg",
    label: "Cutting\nControl",
    bgColor: "bg-[#f2fffb]",
    active: false,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/truck-loading-1.svg",
    label: "Production\nControl",
    bgColor: "bg-[#f2fffb]",
    active: false,
  },
  {
    icon: "https://c.animaapp.com/m8vjj4jeHh0doS/img/setting-2-bulk.svg",
    subIcons: [
      {
        src: "https://c.animaapp.com/m8vjj4jeHh0doS/img/vector.svg",
        className: "absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]",
      },
      {
        src: "https://c.animaapp.com/m8vjj4jeHh0doS/img/vector-1.svg",
        className:
          "absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]",
      },
      {
        src: "https://c.animaapp.com/m8vjj4jeHh0doS/img/receipt-text.svg",
        className: "absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]",
      },
    ],
    label: "Challan\nDetail",
    bgColor: "bg-[#f2fffb]",
    active: false,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex items-center justify-between px-3">
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative w-[77px] h-[38.33px]">
          <div className="relative w-[79px] h-[38px]">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Villemont logo"
              src="https://c.animaapp.com/m8vjj4jeHh0doS/img/group.png"
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
      <div className="flex items-center gap-[18px] ml-8 flex-grow">
        {navigationItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[6.25px]">
            <div
              className={`flex items-center justify-center p-[7.5px] ${item.bgColor} rounded-[11.25px] w-10 h-10`}
            >
              {item.subIcons ? (
                <div className="relative w-[28.75px] h-[30px]">
                  <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
                    <div className="relative w-[26px] h-7 -left-px">
                      <img
                        className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                        alt="Setting icon"
                        src={item.icon}
                      />
                      {item.subIcons.map((subIcon, subIndex) => (
                        <img
                          key={subIndex}
                          className={subIcon.className}
                          alt={`Icon part ${subIndex}`}
                          src={subIcon.src}
                        />
                      ))}
                      <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5" />
                    </div>
                  </div>
                </div>
              ) : item.subIcon ? (
                <div className="relative w-[25px] h-[25px]">
                  <div className="relative h-[25px] bg-[url(https://c.animaapp.com/m8vjj4jeHh0doS/img/box-search.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[9px] h-2 top-[15px] left-4"
                      alt="Search icon"
                      src={item.subIcon}
                    />
                  </div>
                </div>
              ) : (
                <img
                  className="w-[25px] h-[25px]"
                  alt={`${item.label} icon`}
                  src={item.icon}
                />
              )}
            </div>
            <div className="font-medium text-[#f2fffb] text-[12.5px] leading-[12.5px] [font-family:'Mulish',Helvetica] whitespace-pre-line">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="text-white p-0 h-6 w-6"
          >
            <BellIcon className="h-6 w-6" />
          </Button>
          <div className="absolute w-2 h-2 top-0 right-0 bg-accentred-500 rounded" />
        </div>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://c.animaapp.com/m8vjj4jeHh0doS/img/image.png"
                alt="User avatar"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <div className="font-semibold text-white text-xs [font-family:'Mulish',Helvetica]">
                Anil Sharma
              </div>
              <div className="font-medium text-white text-[10px] leading-[10px] [font-family:'Mulish',Helvetica]">
                Manager
              </div>
            </div>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  );
};
