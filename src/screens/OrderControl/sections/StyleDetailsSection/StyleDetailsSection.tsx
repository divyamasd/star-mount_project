import { BellIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const StyleDetailsSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    {
      id: 1,
      name: "Order Management",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/element-plus.svg",
      active: false,
    },
    {
      id: 2,
      name: "Order Control",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/box-search.svg",
      active: true,
      subIcon: "https://c.animaapp.com/m8o543k4QHwU7w/img/group-1039.png",
    },
    {
      id: 3,
      name: "Verification",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/group-1.png",
      active: false,
    },
    {
      id: 4,
      name: "Procurement Module",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/01-align-center.png",
      active: false,
    },
    {
      id: 5,
      name: "Cutting Control",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/scissors-1.svg",
      active: false,
    },
    {
      id: 6,
      name: "Production Control",
      icon: "https://c.animaapp.com/m8o543k4QHwU7w/img/truck-loading-1.svg",
      active: false,
    },
    {
      id: 7,
      name: "Challan Detail",
      icon: null,
      active: false,
      customIcon: true,
    },
  ];

  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-[77px] h-[38.33px] relative">
          <div className="w-[79px] h-[38px] relative">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Villemont logo"
              src="https://c.animaapp.com/m8o543k4QHwU7w/img/group.png"
            />
            <div className="absolute w-[79px] h-[17px] top-[21px] left-0">
              <div className="relative w-[77px] h-[17px]">
                <div className="absolute top-0 left-0 [font-family:'Marvel',Helvetica] font-bold text-[#9dffa3] text-[13.9px] tracking-[2.64px] leading-[normal]">
                  VILLEMONT
                </div>
                <div className="h-1.5 top-1.5 left-[52px] bg-[#ffe100] rounded-[0.91px] absolute w-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-[18px]">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-[6.25px] ${!item.active ? "opacity-[0.43]" : ""}`}
          >
            <div className="flex items-start gap-[12.5px] p-[7.5px] bg-[#f2fffb] rounded-[11.25px]">
              {item.customIcon ? (
                <div className="relative w-[28.75px] h-[30px] mt-[-2.50px] mb-[-2.50px] ml-[-1.88px] mr-[-1.88px]">
                  <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
                    <div className="relative w-[26px] h-7 -left-px">
                      <img
                        className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                        alt="Setting bulk"
                        src="https://c.animaapp.com/m8o543k4QHwU7w/img/setting-2-bulk.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/m8o543k4QHwU7w/img/vector.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/m8o543k4QHwU7w/img/vector-1.svg"
                      />
                      <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                        <img
                          className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]"
                          alt="Receipt text"
                          src="https://c.animaapp.com/m8o543k4QHwU7w/img/receipt-text.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-[25px] h-[25px]">
                  {item.id === 2 ? (
                    <div className="relative h-[25px] bg-[url(https://c.animaapp.com/m8o543k4QHwU7w/img/box-search.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[9px] h-2 top-[15px] left-4"
                        alt="Group"
                        src="https://c.animaapp.com/m8o543k4QHwU7w/img/group-1039.png"
                      />
                    </div>
                  ) : (
                    <img
                      className="w-full h-full"
                      alt={item.name}
                      src={item.icon}
                    />
                  )}
                </div>
              )}
            </div>
            <div className="font-mulish font-medium text-[#f2fffb] text-[12.5px] leading-[12.5px]">
              {item.name.includes(" ") ? (
                <>
                  {item.name.split(" ")[0]} <br />
                  {item.name.split(" ").slice(1).join(" ")}
                </>
              ) : (
                item.name
              )}
            </div>
          </div>
        ))}
      </div>

      {/* User Profile and Notification */}
      <div className="flex items-center gap-6">
        <Button variant="ghost" className="relative w-6 h-6 p-0">
          <BellIcon className="w-6 h-6 text-white" />
          <span className="absolute w-2 h-2 bg-accentred-500 rounded-full top-0 right-0" />
        </Button>

        <div className="w-px h-8 bg-white/30">
          <img
            className="w-full h-full"
            alt="Divider"
            src="https://c.animaapp.com/m8o543k4QHwU7w/img/vector-165.svg"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://c.animaapp.com/m8o543k4QHwU7w/img/image.png"
                alt="Anil Sharma"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-0.5">
              <div className="font-mulish font-semibold text-white text-xs">
                Anil Sharma
              </div>
              <div className="font-mulish font-medium text-white text-[10px] leading-[10px]">
                Manager
              </div>
            </div>
          </div>

          <ChevronDownIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};
