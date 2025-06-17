import {
    BellIcon,
    ChevronDownIcon,
  } from "lucide-react";
  import React, {useState} from "react";
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
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
  } from "../ui/dropdown-menu";
 import companyLogo from "../../../public/company_logo.png"

  
  // Navigation menu items data
  const navigationItems = [
    {
      icon: "../../../public/orderManagement.svg",
      label: "File",
      path: "/barcode-master",
    },
    {
      icon: "../../../public/orderControl.svg",
      subIcon: "../../../public/orderManagement2.png",
      label: "General",
      dropdown: true,
      options: [
        { label: "Barode Master", path: "/barcode-master" },
        { label: "Brand", path: "/brand" },
        { label: "Buyer Control", dropdown:true, 
            opt: [
                { label: "Buyer Group", path: "/buyer-group" },
                { label: "Buyer Details", path: "/buyer-details" },
            ]
         },
        { label: "Colour", path: "/colour" },
        { label: "Company", path: "/company" },
        { label: "Country Control", dropdown:true, 
            opt: [
                { label: "City Master", path: "/city-master" },
                { label: "Country Group", path: "/country-group" },
                { label: "Region Master", path: "/region-master" },
                { label: "State master", path: "/state-master" },
                { label: "Country", path: "/country" },
            ]
         },
        { label: "Component", path: "/component" },
        { label: "Sub Component", path: "/sub-component" },
        { label: "Currency", path: "/currency" },
        { label: "Department", path: "/department" },
        { label: "General Challan Type", path: "/general-challan-type" },
        { label: "Group", path: "/group" },
        { label: "Mode of Dispatch", path: "/mode-of-dispatch" },
        { label: "Person", path: "/person" },
        { label: "Process Control", dropdown:true,
            opt: [
                { label: "Sub Process", path: "/sub-process" },
                { label: "Process Activity", path: "/process-activity" },
            ]
         },
        { label: "Season Year", path: "/season-year" },
        { label: "Shipping Address", path: "/shipping-address" },
        { label: "Time Slot", path: "/time-slot" },
        { label: "Measure Unit", path: "/measure-unit" },
        { label: "vendor", path: "/vendor" },
        { label: "Financial Year", path: "/financial-year" },
        { label: "Opening Stock", path: "/opening-stock" },
        { label: "Tailor Group Master", path: "/tailor-group-master" },
      ],
    },
    {
      icon: "../../../public/verification.png",
      label: "Account",
      dropdown: true,
      options: [
        { label: "Tax Type", path: "/tax-type" },
        { label: "Other Expense Master", path: "/other-expense-master" },
        { label: "Tax Template Master", path: "/tax-template-master" },
        { label: "GST Template Master", path: "/gst-template-master" },
      ],
    },
    {
      icon: "../../../public/procurement.png",
      label: "Export\nDocumentation",
      path: "/barcode-master"
    },
    {
      icon: "../../../public/cutting.svg",
      label: "Item\nControl",
      path: "/barcode-master"
    },
    {
      icon: "../../../public/productionControl.svg" ,
      label: "Order\nModule",
      dropdown: true,
      options: [
        { label: "Sampling", path: "/sampling" },
        { label: "Activity control", dropdown:true,
            opt: [
                { label: "Activity Control", path: "/activity-control" },
                { label: "Activity Master", path: "/activity-master" },
            ]
         },
        { label: "Style Group Master", path: "/style-group-master" },
        { label: "Group Master", path: "/group-master" },
        { label: "Sales Order", dropdown: true, 
            opt: [
                { label: "Sale Agent", path: "/sale-agent" },
                { label: "Sale Representative", path: "/sale-representative" },
            ]
         },
        { label: "Time and Action", path: "/time-and-action" },
        { label: "User Wise E-mail Info", path: "/user-wise-email-info" },
        { label: "Head Costing Template", path: "/head-costing-template" },
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
      label: "Stock\nControl",
      dropdown: true,
      options: [
        { label: "Bin Master", path: "/bin-master" },
        { label: "Indent Master", path: "/indentMaster" },
        { label: "Grade Master", path: "/grade-master" },
        { label: "Make Master", path: "/makeMaster" },
        { label: "Store Master", path: "/store-master" },
        { label: "Vehicle Master", path: "/vehicle-master" },
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
      label: "Custom\nReport",
      path:"/barcode-master"
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
      label: "Reports",
      path:"/barcode-master"
    },
  ];
  
  export const NavbarNewModule = (): JSX.Element => {
    const location = useLocation();
    const [userName, setUserName] = useState("Anil Sharma");
    const [userRole, setUserRole] = useState("Manager");
    const [userIcon, setUserIcon] = useState("https://c.animaapp.com/m8o62etcI5Wrge/img/image.png");
  
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
                        option.dropdown && option.opt ? (
                            <DropdownMenuSub key={optionIndex}>
                            <DropdownMenuSubTrigger className="cursor-pointer">
                                {option.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-56 ml-2">
                                {option.opt.map((subOption, subIndex) => (
                                <DropdownMenuItem key={subIndex}>
                                    <Link to={subOption.path} className="w-full">
                                    {subOption.label}
                                    </Link>
                                </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        ) : (
                            <DropdownMenuItem key={optionIndex}>
                            <Link to={option.path} className="w-full">
                                {option.label}
                            </Link>
                            </DropdownMenuItem>
                        )
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
          <Button variant="ghost" className="relative p-0 h-6 w-6" onClick={() => alert("Notification clicked")}>
            <BellIcon className="h-6 w-6 text-white" />
            <span className="absolute w-2 h-2 bg-accentred-500 rounded-full top-0 right-0" />
          </Button>
  
          <div className="w-px h-8 bg-white/30" />
  
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={userIcon}
                alt="User avatar"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
  
            <div className="flex flex-col gap-0.5">
              <div className="[font-family:'Mulish',Helvetica] font-semibold text-white text-xs">
                {userName}
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-white text-[10px] leading-[10px]">
                {userRole}
              </div>
            </div>
  
            <DropdownMenu>
              <DropdownMenuTrigger >
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuItem onClick={() => alert("Logout clicked")}>
                    {"Logout"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/order-entry">{"Module 1"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/barcode-master">{"Module 2"}</Link>
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  };
  

  