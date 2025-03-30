import {
  BellIcon,
  ChevronDownIcon,
  ScissorsIcon,
  TruckIcon,
} from "lucide-react";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Separator } from "../../../../components/ui/separator";

export const ListingSection = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    {
      icon: "https://c.animaapp.com/m8smldcxonxJt0/img/element-plus.svg",
      title: "Order Management",
      alt: "Element plus",
    },
    {
      icon: "https://c.animaapp.com/m8smldcxonxJt0/img/box-search.svg",
      title: "Order Management",
      alt: "Box search",
      additionalImg: {
        src: "https://c.animaapp.com/m8smldcxonxJt0/img/group-1039.png",
        alt: "Group",
      },
    },
    {
      icon: "https://c.animaapp.com/m8smldcxonxJt0/img/group-1.png",
      title: "Verification",
      alt: "Group",
    },
    {
      icon: "https://c.animaapp.com/m8smldcxonxJt0/img/01-align-center.png",
      title: "Procurement Module",
      alt: "Align center",
    },
    {
      iconComponent: <ScissorsIcon className="w-[25px] h-[25px]" />,
      title: "Cutting Control",
    },
    {
      iconComponent: <TruckIcon className="w-[25px] h-[25px]" />,
      title: "Production Control",
    },
    {
      icon: null,
      title: "Challan Detail",
      customIcon: (
        <div className="relative w-[28.75px] h-[30px] mt-[-2.50px] mb-[-2.50px] ml-[-1.88px] mr-[-1.88px]">
          <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
            <div className="relative w-[26px] h-7 -left-px">
              <img
                className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                alt="Setting bulk"
                src="https://c.animaapp.com/m8smldcxonxJt0/img/setting-2-bulk.svg"
              />
              <img
                className="absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]"
                alt="Vector"
                src="https://c.animaapp.com/m8smldcxonxJt0/img/vector.svg"
              />
              <img
                className="absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]"
                alt="Vector"
                src="https://c.animaapp.com/m8smldcxonxJt0/img/vector-1.svg"
              />
              <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                <img
                  className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]"
                  alt="Receipt text"
                  src="https://c.animaapp.com/m8smldcxonxJt0/img/receipt-text.svg"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex items-center justify-between px-3">
      {/* Logo section */}
      <div className="flex items-center">
        <div className="w-[77px] h-[38.33px] relative mr-10">
          <div className="relative w-[79px] h-[38px]">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Group"
              src="https://c.animaapp.com/m8smldcxonxJt0/img/group.png"
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

        {/* Navigation menu */}
        <nav className="flex items-center gap-[18px]">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[6.25px]">
              <div className="flex items-center justify-center w-10 h-10 bg-[#f2fffb] rounded-[11.25px] p-[7.5px]">
                {item.iconComponent ? (
                  item.iconComponent
                ) : item.customIcon ? (
                  item.customIcon
                ) : (
                  <div className="relative w-[25px] h-[25px]">
                    {item.icon && (
                      <img
                        className="w-full h-full"
                        alt={item.alt || ""}
                        src={item.icon}
                      />
                    )}
                    {item.additionalImg && (
                      <img
                        className="absolute w-[9px] h-2 top-[15px] left-4"
                        alt={item.additionalImg.alt}
                        src={item.additionalImg.src}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="text-[#f2fffb] text-[12.5px] leading-[12.5px] font-medium font-['Mulish',Helvetica]">
                {item.title.includes(" ") ? (
                  <>
                    {item.title.split(" ")[0]} <br />
                    {item.title.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  item.title
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* User profile section */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <BellIcon className="w-6 h-6 text-white" />
          <Badge className="w-2 h-2 p-0 absolute top-0 right-0 bg-accentred-500 rounded-full" />
        </div>

        <Separator orientation="vertical" className="h-8 bg-white/50" />

        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src="https://c.animaapp.com/m8smldcxonxJt0/img/image.png"
                      alt="Anil Sharma"
                    />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-semibold text-white text-xs">
                      Anil Sharma
                    </div>
                    <div className="font-medium text-white text-[10px] leading-[10px]">
                      Manager
                    </div>
                  </div>
                </div>
                <ChevronDownIcon className={`w-4 h-4 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Anil Sharma</p>
                <p className="text-xs leading-none text-muted-foreground">
                  anil.sharma@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
