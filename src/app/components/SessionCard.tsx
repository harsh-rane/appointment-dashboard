"use client";

import React from 'react'
import { ArrowDownward, FmdGood, Key, LocationCity, Phone, VideoCall, } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';

interface Session {
    time: string;
    location: string;
    doctorName: string;
    doctorAvatar: string;
    duration?: string;
    mode?: string;
    previousSession: string;
}

const SessionCard = ({ session, isUpcoming = false }: Readonly<{ session: Session; isUpcoming?: boolean }>) => {
  return (
    <div
        className={`${
            !isUpcoming ? 'bg-white/20' : 'bg-neutral-50/50'
        } rounded-2xl  transition-all duration-200 hover:-translate-y-1 mb-2 p-2 md:p-6`}
    >
      <div className="flex gap-0.5">
        <div className=" min-w-20 md:min-w-[100px] items-center">
          <p className="text-md md:text-md font-semibold text-gray-800">
            {session.time}
          </p>
          <p className="text-sm text-gray-500">
            {session.location}
          </p>
        </div>

        <div className="w-px bg-neutral-400/30 mx-2"></div>

        <div className="flex items-center gap-3 flex-1">
          {
            isUpcoming && (
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                {/* <img
                  src={session.doctorAvatar}
                  alt={session.doctorName}
                  className="w-full h-full object-cover"
                /> */}
                <Image
                  src={"/assets/images/doctor.png"}
                  alt={session.doctorName}
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                />
              </div>
            )
          }
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="text-md md:text-md font-semibold text-gray-800 truncate">
                <h3 className='text-sm md:text-md'>{session.doctorName}</h3>
                {!isUpcoming && (
                    <div>
          <p className="text-sm text-gray-600 font-medium">Previous Session:</p>
          <p className="text-sm text-gray-500">{session.previousSession}</p>
        </div>
                )}
              </div>
              {isUpcoming && (
                <>
                  
                  <button className="text-gray-400 hover:text-gray-600">
                    <KeyboardArrowDownIcon className="w-5 h-5" />
                  </button>
                </>
              )}
              
            </div>
            {isUpcoming && (
                <button className="bg-[#776EA5] hover:bg-[#9B8EE3] text-white rounded-full p-2 transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
            )}
          </div>
        </div>
      </div>

      {isUpcoming && (
        <>
          <div className="mb-4 space-y-1">
            <p className="text-sm text-gray-600 font-medium">
              Session Duration: <span className="font-medium">{session.duration}</span>
            </p>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-600 font-medium">
                Session Mode: <span className="font-medium">{session.mode}</span>
              </p>
              <span className="bg-[#776EA5] rounded-full flex items-center justify-center
                 w-3 h-3 md:w-6 md:h-6">
                <FmdGood className="text-white w-1.5 h-1.5 md:w-3 md:h-3" />
              </span>


              {/* <span className="bg-[#776EA5] w-4 h-4 rounded-full flex items-center justify-center">
                <p className='text-white '><FmdGood className="text-white" /></p>
                <FmdGood className="text-white w-0 h-0 text-xs" />
              </span> */}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button className="rounded-xl px-6 py-2.5 text-white font-medium shadow-md transition-all hover:shadow-lg bg-linear-to-r from-[#B0A4F5] to-[#EDA197] ">
              <span>Mark as Completed</span>
            </button>

            <div className="flex-1 min-w-[200px]">
              <p className="text-sm text-gray-600 font-medium">Previous Session:</p>
              <p className="text-sm text-gray-500">{session.previousSession}</p>
            </div>
          </div>
        </>
      )}

     
    </div>
  );
};

export default SessionCard