import { ChevronDownIcon, ScissorsIcon, TruckIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Separator } from "../../../../components/ui/separator";

export const RowClearButtonSection = (): JSX.Element => {
  const location = useLocation();

  // Navigation menu items data
  const navItems = [
    {
      icon: "https://c.animaapp.com/m8o7e9ng9ZZS14/img/element-plus.svg",
      label: "Order\nManagement",
      path: "/",
    },
    {
      icon: "https://c.animaapp.com/m8o7e9ng9ZZS14/img/box-search.svg",
      subIcon: "https://c.animaapp.com/m8o7e9ng9ZZS14/img/group-1039.png",
      label: "Order\nQuantity",
      dropdown: true,
      options: [
        { label: "Order Entry", path: "/order-entry" },
        { label: "Order Quantity", path: "/order-quantity" },
        { label: "Order Final Fabric Detail", path: "/order-final-fabric-detail" },
        { label: "Order Exchange", path: "/order-exchange" },
        { label: "Order Component", path: "/order-component" },
        { label: "Fabric Planning", path: "/fabric-planning" },
        { label: "Fabric Average", path: "/fabric-average" },
        { label: "Accessory Details", path: "/accessory-details" },
        { label: "Packing Details", path: "/packing-details" },
        { label: "Production Plan Details", path: "/production-plan-details" },
      ],
    },
    {
      icon: "https://c.animaapp.com/m8o7e9ng9ZZS14/img/group-1.png",
      label: "Verification",
      path: "/verification",
    },
    {
      icon: "https://c.animaapp.com/m8o7e9ng9ZZS14/img/01-align-center.png",
      label: "Procurement\nModule",
      path: "/procurement",
    },
    {
      iconComponent: <ScissorsIcon className="w-[25px] h-[25px]" />,
      label: "Cutting\nControl",
      path: "/cutting-control",
    },
    {
      iconComponent: <TruckIcon className="w-[25px] h-[25px]" />,
      label: "Production\nControl",
      path: "/production-control",
    },
    {
      complexIcon: true,
      label: "Challan\nDetail",
      path: "/challan-detail",
    },
  ];

  return (
    <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex justify-between items-center px-3">
      {/* Logo */}
      <div className="flex items-center h-[51px]">
        <div className="relative w-[77px] h-[38.33px]">
          <div className="relative w-[79px] h-[38px]">
            <img
              className="absolute w-[26px] h-[23px] top-0 left-[25px]"
              alt="Villemont logo"
              src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/group.png"
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
        {navItems.map((item, index) => (
          item.dropdown ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <div className={`flex items-center gap-[6.25px] cursor-pointer ${
                  location.pathname.startsWith('/order') ? "opacity-100" : "opacity-50"
                }`}>
                  <div className="flex items-center justify-center p-[7.5px] bg-[#f2fffb] rounded-[11.25px]">
                    <div className="relative w-[25px] h-[25px]">
                      <img
                        className="w-full h-full"
                        alt={`Menu icon ${index}`}
                        src={item.icon}
                      />
                      <img
                        className="absolute w-[9px] h-2 top-[15px] left-4"
                        alt="Sub icon"
                        src={item.subIcon}
                      />
                    </div>
                  </div>
                  <span className="text-[#f2fffb] text-[12.5px] leading-[12.5px] font-medium font-['Mulish',Helvetica] whitespace-pre-line">
                    {item.label}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {item.options.map((option, optionIndex) => (
                  <DropdownMenuItem key={optionIndex}>
                    <Link to={option.path} className="w-full">
                      {option.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-[6.25px] p-0 bg-transparent hover:bg-transparent ${
                location.pathname === item.path ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="flex items-center justify-center p-[7.5px] bg-[#f2fffb] rounded-[11.25px]">
                {item.iconComponent ? (
                  item.iconComponent
                ) : item.complexIcon ? (
                  <div className="relative w-[28.75px] h-[30px] mt-[-2.50px] mb-[-2.50px] ml-[-1.88px] mr-[-1.88px]">
                    <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
                      <div className="relative w-[26px] h-7 -left-px">
                        <img
                          className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                          alt="Setting bulk"
                          src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/setting-2-bulk.svg"
                        />
                        <img
                          className="absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]"
                          alt="Vector"
                          src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/vector-1.svg"
                        />
                        <img
                          className="absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]"
                          alt="Vector"
                          src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/vector.svg"
                        />
                        <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                          <img
                            className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]"
                            alt="Receipt text"
                            src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/receipt-text.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-[25px] h-[25px]">
                    <img
                      className="w-full h-full"
                      alt={`Icon for ${item.label}`}
                      src={item.icon}
                    />
                  </div>
                )}
              </div>
              <span className="text-[#f2fffb] text-[12.5px] leading-[12.5px] font-medium font-['Mulish',Helvetica] whitespace-pre-line">
                {item.label}
              </span>
            </Link>
          )
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="flex items-center gap-6">
        <Button
          variant="ghost"
          className="relative p-0 h-6 w-6"
          aria-label="Notifications"
        >
          <div className="w-6 h-6 bg-[url(https://c.animaapp.com/m8o7e9ng9ZZS14/img/notification.svg)] bg-[100%_100%]">
            <div className="absolute w-2 h-2 left-[15px] bg-accentred-500 rounded" />
          </div>
        </Button>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage
              src="https://c.animaapp.com/m8o7e9ng9ZZS14/img/image.png"
              alt="Anil Sharma"
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

          <ChevronDownIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};
