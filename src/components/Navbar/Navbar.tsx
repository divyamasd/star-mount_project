import {
    BellIcon,
    ChevronDownIcon,
  } from "lucide-react";
  import React from "react";
  import { Link, useLocation } from "react-router-dom";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../ui/avatar";
  import { Button } from "../ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";
 import companyLogo from "../../../public/company_logo.png"

  
  // Navigation menu items data
  const navigationItems = [
    {
      icon: "../../../public/orderManagement.svg",
      label: "Order\nManagement",
      path: "/",
    },
    {
      icon: "../../../public/orderControl.svg",
      subIcon: "../../../public/orderManagement2.png",
      label: "Order\nControl",
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
      icon: "../../../public/verification.png",
      label: "Verification",
      dropdown: true,
      options: [
        { label: "Order Authentication", path: "/order-authentication" },
      ],
    },
    {
      icon: "../../../public/procurement.png",
      label: "Procurement\nModule",
      dropdown: true,
      options: [
        { label: "Fabric Lather Management", path: "/fabric-lather-management" },
        { label: "Row PO fabric Leather", path: "/row-fabric-leather" },
        { label: "Receiving Inspection", path: "/receiving-inspection" },
        { label: "Inspection & Receiving", path: "/inspection-and-receiving" },
      ],
    },
    {
      icon: "../../../public/cutting.svg",
      label: "Cutting\nControl",
      dropdown: true,
      options: [
        { label: "Order Process Control", path: "/order-process-control" },
      ],
    },
    {
      icon: "../../../public/productionControl.svg" ,
      label: "Production\nControl",
      dropdown: true,
      options: [
        { label: "Other Process Control", path: "/other-process-control" },
        { label: "Production Issue", path: "/production-issue" },
        { label: "Production Received", path: "/production-received" },
        { label: "Leather Cutting Process", path: "/leather-cutting-process" },
      ],
    },
    {
      customIcon: (
        <div className="relative w-[28.75px] h-[30px] mt-[-2.50px] mb-[-2.50px] ml-[-1.88px] mr-[-1.88px]">
          <div className="relative w-[25px] h-[27px] -top-px left-[3px] rotate-[-0.12deg]">
            <div className="relative w-[26px] h-7 -left-px">
              <img
                className="absolute w-[11px] h-[11px] top-0 left-[15px] rotate-[0.12deg]"
                alt="Setting bulk"
                src="../../../public/challanSettingBulk.svg" 
              />
              <img
                className="absolute w-[13px] h-[22px] top-1 left-0 rotate-[0.12deg]"
                alt="Vector"
                src="../../../public/challanVector1.svg" 
              />
              <img
                className="absolute w-[13px] h-[13px] top-[15px] left-[11px] rotate-[0.12deg]"
                alt="Vector"
                src="../../../public/challanVector2.svg" 
              />
              <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                <img
                  className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[0.12deg]"
                  alt="Receipt text"
                  src="../../../public/challanReceipt.svg" 
                />
              </div>
            </div>
          </div>
        </div>
      ),
      label: "Challan\nDetail",
      dropdown: true,
      options: [
        { label: "Challan Detail", path: "/challan-detail" },
        { label: "Purchase Order Detail", path: "/purchase-order-detail" },
        { label: "Other Production Order", path: "/other-production-order" },
        { label: "Challan Cancellation", path: "/challan-cancellation" },
        { label: "Master Details", path: "/master-details" },
        { label: "Fabric Details", path: "/fabric-details" },
      ],
    },
  ];
  
  export const Navbar = (): JSX.Element => {
    const location = useLocation();
  
    return (
      <header className="w-full h-[74px] bg-[#2c97cd] border border-solid border-[#f6f6f6] flex justify-between items-center px-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-[77px] h-[38.33px] relative mr-10">
            <div className="relative w-[79px] h-[38px]">
              <img
                className="absolute w-[26px] h-[23px] top-0 left-[25px]"
                alt="Group"
                src={companyLogo}
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
  
          {/* Navigation Menu */}
          <nav className="flex items-center gap-[18px]">
            {navigationItems.map((item, index) => (
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <div className={`flex items-center gap-[6.25px] cursor-pointer `}>
                      <div className="flex items-center justify-center w-10 h-10 bg-[#f2fffb] rounded-[11.25px] p-[7.5px]">
                        {item.customIcon ? (item.customIcon): (
                          <div className="relative w-[25px] h-[25px]">
                          <img
                            className="w-full h-full"
                            alt={`Menu icon ${index}`}
                            src={item.icon}
                          />
                          {item.subIcon && (
                            <img
                              className="absolute w-[9px] h-2 top-[15px] left-4"
                              alt="Sub icon"
                              src={item.subIcon}
                            />
                          )}
                        </div>
                        )}
                      </div>
                      <div className="font-medium text-[#f2fffb] text-[12.5px] leading-[12.5px] [font-family:'Mulish',Helvetica] whitespace-pre-line">
                        {item.label}
                      </div>
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
                  className={`flex items-center gap-[6.25px]`}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-[#f2fffb] rounded-[11.25px] p-[7.5px]">
                      <div className="relative w-[25px] h-[25px]">
                        {item.icon && (
                          <img
                            className="w-full h-full"
                            alt={`Menu icon ${index}`}
                            src={item.icon}
                          />
                        )}
                      </div>
                  </div>
                  <div className="font-medium text-[#f2fffb] text-[12.5px] leading-[12.5px] [font-family:'Mulish',Helvetica] whitespace-pre-line">
                    {item.label}
                  </div>
                </Link>
              )
            ))}
          </nav>
        </div>
  
        {/* User Profile Section */}
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="relative p-0 h-6 w-6">
            <BellIcon className="h-6 w-6 text-white" />
            <span className="absolute w-2 h-2 bg-accentred-500 rounded-full top-0 right-0" />
          </Button>
  
          <div className="w-px h-8 bg-white/30" />
  
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://c.animaapp.com/m8o62etcI5Wrge/img/image.png"
                alt="User avatar"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
  
            <div className="flex flex-col gap-0.5">
              <div className="[font-family:'Mulish',Helvetica] font-semibold text-white text-xs">
                Anil Sharma
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-white text-[10px] leading-[10px]">
                Manager
              </div>
            </div>
  
            <DropdownMenu>
              <DropdownMenuTrigger >
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuItem >
                    {"Logout"}
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  };
  

  