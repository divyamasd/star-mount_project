import { CalendarIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";


export const CalendarInput = ({
    selectedDate,
    setSelectedDate,
    placeholder,
    id,
  }: {
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    placeholder: string;
    id: string;
  }): JSX.Element => {
    const datePickerRef = useRef<any>(null);
  
    return (
      <div className="relative w-full">
        <input
           type="text"
           readOnly
           value={selectedDate ? format(selectedDate, "PPP") : ""}
           placeholder={placeholder}
           className="
             peer block w-full h-[34px] text-[15px]
             px-2.5 pb-1.5 pt-2
             text-gray-900 bg-white rounded-md
             border border-gray-300
             focus:outline-none focus:ring-0 focus:border-blue-400
             placeholder-transparent
           "
           onClick={() => datePickerRef.current?.setOpen(true)}
         />
         <button
           type="button"
           onClick={() => datePickerRef.current?.setOpen(true)}
           className="absolute right-2.5 top-1/2 -translate-y-1/2"
         >
           <CalendarIcon className="w-5 h-5 text-gray-500" />
         </button>
         <DatePicker
           ref={datePickerRef}
           selected={selectedDate}
           onChange={(date) => setSelectedDate(date)}
           customInput={<></>}
           id={id}
           popperPlacement="bottom-start"
           wrapperClassName="absolute z-50"
         />
         <label
           className={`
             absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
             transition-all duration-200 origin-top-left
             ${
               selectedDate
                 ? "top-[-0.4rem] scale-75 text-blue-400"
                 : "top-[0.65rem] scale-100 text-gray-500"
             }
             peer-focus:top-[-0.4rem]
             peer-focus:scale-75
             peer-focus:text-blue-400
           `}
           style={{ transformOrigin: "top left" }}
         >
           {placeholder}
         </label>
        
      </div>
    );
  };

  