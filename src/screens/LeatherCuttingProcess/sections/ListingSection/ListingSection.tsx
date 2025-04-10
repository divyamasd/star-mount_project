import {
  BellIcon,
  ChevronDownIcon,
  ScissorsIcon,
  TruckIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const ListingSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    {
      icon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/element-plus.svg",
      label: "Order\nManagement",
    },
    {
      icon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/box-search.svg",
      subIcon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/group-1039.png",
      label: "Order\nManagement",
    },
    {
      icon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/group-1.png",
      label: "Verification",
    },
    {
      icon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/01-align-center.png",
      label: "Procurement\nModule",
    },
    {
      iconComponent: <ScissorsIcon className="w-[25px] h-[25px]" />,
      label: "Cutting\nControl",
    },
    {
      iconComponent: <TruckIcon className="w-[25px] h-[25px]" />,
      label: "Production\nControl",
    },
    {
      icon: "https://c.animaapp.com/m8vepbdgjWOCsS/img/setting-2-bulk.svg",
      additionalIcons: [
        "https://c.animaapp.com/m8vepbdgjWOCsS/img/vector.svg",
        "https://c.animaapp.com/m8vepbdgjWOCsS/img/vector-1.svg",
        "https://c.animaapp.com/m8vepbdgjWOCsS/img/receipt-text.svg",
      ],
      label: "Challan\nDetail",
    },
  ];

  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex items-center justify-between px-3">
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative w-[77px] h-[38.33px]">
          <div className="relative w-[79px] h-[38px]">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Villemont logo"
              src="https://c.animaapp.com/m8vepbdgjWOCsS/img/group.png"
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
      <div className="flex items-center gap-[18px] ml-8">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-[6.25px] p-0 bg-transparent hover:bg-transparent"
          >
            <div className="flex items-center justify-center p-[7.5px] bg-[#f2fffb] rounded-[11.25px]">
              {item.iconComponent ? (
                item.iconComponent
              ) : item.additionalIcons ? (
                <div className="relative w-[28.75px] h-[30px]">
                  <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
                    <div className="relative w-[26px] h-7 -left-px">
                      <img
                        className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                        alt="Setting icon"
                        src={item.icon}
                      />
                      {item.additionalIcons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          className={`absolute ${
                            iconIndex === 0
                              ? "w-[13px] h-[22px] top-1 left-0"
                              : iconIndex === 1
                                ? "w-[13px] h-[13px] top-[15px] left-[11px]"
                                : "w-[13px] h-[13px] top-[9px] left-1.5"
                          } rotate-[0.12deg]`}
                          alt={`Icon ${iconIndex}`}
                          src={icon}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.subIcon ? (
                <div className="relative w-[25px] h-[25px]">
                  <div className="relative h-[25px] bg-[url(https://c.animaapp.com/m8vepbdgjWOCsS/img/box-search.svg)] bg-[100%_100%]">
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
            <div className="text-[#f2fffb] text-[12.5px] leading-[12.5px] font-medium font-mulish whitespace-pre-line">
              {item.label}
            </div>
          </Button>
        ))}
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-6">
        <Button variant="ghost" className="relative p-0 h-6 w-6">
          <BellIcon className="h-6 w-6 text-white" />
          <span className="absolute w-2 h-2 bg-accentred-500 rounded-full top-0 right-0" />
        </Button>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://c.animaapp.com/m8vepbdgjWOCsS/img/image.png"
                alt="Anil Sharma"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-white text-xs font-mulish">
                Anil Sharma
              </span>
              <span className="font-medium text-white text-[10px] leading-[10px] font-mulish">
                Manager
              </span>
            </div>
          </div>

          <ChevronDownIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};
