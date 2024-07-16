import React from 'react'
import { BiSupport } from "react-icons/bi";
import { FaDiscourse } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { PiLineVerticalThin } from "react-icons/pi";


function HeaderTop() {
  return (
    <div className='mx-auto text-text bg-[#e7e4e4]'>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center mx-32 py-2'>
            <div>
                <p className='font-normal text-[14px]'>Welcome to Career Courses</p>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0'>
                <div className='flex gap-1'>
                    <GrCertificate className='text-primary w-[18px] h-[18px]'/>
                    <p className='text-[14px]'>Certification</p>
                </div>
                <div className='hidden md:block'>
                    <PiLineVerticalThin />
                </div>
                <div className='flex gap-1'>
                    <BiSupport className='text-primary w-[18px] h-[18px]'/> 
                    <p className='text-[14px]'>Support</p>
                </div>
                <div className='hidden md:block' >
                    <PiLineVerticalThin />
                </div>
                <div className='flex gap-1'>
                    <FaDiscourse className='text-primary w-[18px] h-[18px]'/>
                    <p className='text-[14px]'>Courses</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop