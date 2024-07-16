import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdFormatListNumbered } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <div className="container mx-auto text-text">
      <div className="flex justify-between py-4">
        <Link href={"/"} className="flex gap-2 items-center">
          <IoBookSharp className="p-1 w-8 h-8 bg-background text-primary rounded-lg" />
          <h2 className="text-primary text-xl md:text-4xl font-bold">
            LearnMore
          </h2>
        </Link>
        <div className="block lg:hidden">
          <PiLineVerticalThin className="h-6 w-6" />
        </div>
        <div className="flex items-center ">
          <Link href={"/login"} className="flex gap-1 items-center">
            <PiStudentBold className="text-primary w-6 h-6 mx-1 md:mx-3 lg:mx-0" />
            <p className="md:text-[16px] font-bold hidden lg:block">Sign-In</p>
          </Link>
          <div className="hidden lg:block">
            <PiLineVerticalThin className="h-6 w-6" />
          </div>
          <Link href={"/Application"} className="flex gap-1 items-center">
            <MdFormatListNumbered className="text-primary w-6 h-6 mx-1 md:mx-3 lg:mx-0" />
            <p className="text-[16px] font-bold hidden lg:block">Application</p>
          </Link>

          <div className="hidden lg:block">
            <PiLineVerticalThin className="h-6 w-6" />
          </div>
          <Link href={"/Enquiry"} className="flex gap-1 items-center">
            <FaWpforms className="text-primary w-6 h-6 mx-1 md:mx-3 lg:mx-0" />
            <p className="text-[16px] font-bold hidden lg:block">Enquiry</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
