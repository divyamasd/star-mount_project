import {
    BellIcon,
    ChevronDownIcon,
    ScissorsIcon,
    TruckIcon,
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
  
  // Navigation menu items data
  const navigationItems = [
    {
      icon: "https://c.animaapp.com/m8o62etcI5Wrge/img/element-plus.svg",
      label: "Order\nManagement",
      path: "/",
    },
    {
      icon: "https://c.animaapp.com/m8o62etcI5Wrge/img/box-search.svg",
      subIcon: "https://c.animaapp.com/m8o62etcI5Wrge/img/group-1039.png",
      label: "Order\nList",
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
      icon: "https://c.animaapp.com/m8o62etcI5Wrge/img/group-1.png",
      label: "Verification",
      dropdown: true,
      options: [
        { label: "Order Authentication", path: "/order-authentication" },
      ],
    },
    {
      icon: "https://c.animaapp.com/m8o62etcI5Wrge/img/01-align-center.png",
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
      iconComponent: <ScissorsIcon className="w-[25px] h-[25px]" />,
      label: "Cutting\nControl",
      dropdown: true,
      options: [
        { label: "Order Process Control", path: "/order-process-control" },
      ],
    },
    {
      iconComponent: <TruckIcon className="w-[25px] h-[25px]" />,
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
      icon: "https://c.animaapp.com/m8o62etcI5Wrge/img/setting-2-bulk.svg",
      additionalIcons: [
        "https://c.animaapp.com/m8o62etcI5Wrge/img/vector-1.svg",
        "https://c.animaapp.com/m8o62etcI5Wrge/img/vector.svg",
        "https://c.animaapp.com/m8o62etcI5Wrge/img/receipt-text.svg",
      ],
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
  
  export const HeaderSection = (): JSX.Element => {
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
                src="https://c.animaapp.com/m8o62etcI5Wrge/img/group.png"
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
                    <div className={`flex items-center gap-[6.25px] cursor-pointer ${
                      location.pathname.startsWith('/order') ? "opacity-100" : "opacity-50"
                    }`}>
                      <div className="flex items-center justify-center w-10 h-10 bg-[#f2fffb] rounded-[11.25px] p-[7.5px]">
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
                  className={`flex items-center gap-[6.25px] ${
                    location.pathname === item.path ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-[#f2fffb] rounded-[11.25px] p-[7.5px]">
                    {item.iconComponent ? (
                      item.iconComponent
                    ) : (
                      <div className="relative w-[25px] h-[25px]">
                        {item.icon && (
                          <img
                            className="w-full h-full"
                            alt={`Menu icon ${index}`}
                            src={item.icon}
                          />
                        )}
                        {item.additionalIcons && (
                          <>
                            <img
                              className="absolute w-[13px] h-[22px] top-1 left-0"
                              alt="Vector"
                              src={item.additionalIcons[0]}
                            />
                            <img
                              className="absolute w-[13px] h-[13px] top-[15px] left-[11px]"
                              alt="Vector"
                              src={item.additionalIcons[1]}
                            />
                            <div className="absolute w-[13px] h-[13px] top-[9px] left-1.5">
                              <img
                                className="absolute w-[13px] h-[13px] top-0 left-0"
                                alt="Receipt text"
                                src={item.additionalIcons[2]}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    )}
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
  
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>
    );
  };
  