import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PackingDetailsSection } from "./sections/PackingDetailsSection/PackingDetailsSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

import { NavbarNewModule } from "../../components/Navbar/NavbarNewModule";

export const Company = (): JSX.Element => {
  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative flex flex-col">
        {/* Top section with ListingSection */}
        <div className="w-full">
          <NavbarNewModule />
        </div>

        {/* Title */}
        <div className="flex justify-between items-center p-10 pb-6">
          <h1 className="font-semibold text-2xl [font-family:'Mulish',Helvetica]">
            Company
          </h1>
          
        </div>

        <div className="flex flex-col w-full">
          <HeaderSection />
          <Separator className="mx-10 my-6" />
        
        </div>
      </div>
    </div>
  );
};

