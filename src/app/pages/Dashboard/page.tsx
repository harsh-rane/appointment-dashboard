'use client';

import React from "react";
import SessionCard from "../../components/SessionCard";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();
  const upcomingSession = {
    time: "11:00 AM",
    location: "Bandra",
    doctorName: "Dr. Kiran Rathi",
    doctorAvatar: "https://i.pravatar.cc/150?img=13",
    duration: "01:00 HR",
    mode: "Online",
    previousSession: "Tuesday, March 5, 2023",
  };

  const pastSessions = [
    {
      time: "12:00 AM",
      location: "",
      doctorName: "Dr. Ramesh Naik",
      doctorAvatar: "https://i.pravatar.cc/150?img=13",
      previousSession: "Tuesday, March 25, 2023",
    },
    {
      time: "10:30 AM",
      location: "",
      doctorName: "Dr. Suresh Sawant",
      doctorAvatar: "https://i.pravatar.cc/150?img=14",
      previousSession: "Tuesday, March 15, 2023",
    },
    {
      time: "09:30 AM",
      location: "",
      doctorName: "Dr. Neeta Singh",
      doctorAvatar: "https://i.pravatar.cc/150?img=15",
      previousSession: "Tuesday, Feb 25, 2023",
    },
  ];

  const handleScheduleClick = () => {
    router.push('/pages/Doctors');
  };
  return (
    <div className="max-w-md  mx-auto bg-linear-to-b from-[#DFDAFB] to-[#F9CCC5]">

     
<div className="max-w-md mx-auto ">
    <Header />
  </div>
    <div className=" max-w-md mx-auto px-4 md:px-4  bg-linear-to-b from-[#DFDAFB] to-[#F9CCC5]">
      <h2 className="text-md md:text-md font-semibold text-gray-800 mb-4">
        Upcoming Session
      </h2>

      <SessionCard session={upcomingSession} isUpcoming={true} />

      <h2 className="text-md md:text-md font-semibold text-gray-800 mb-4 mt-8">
        Past Sessions
      </h2>

      {pastSessions.map((session, index) => (
        <SessionCard key={index} session={session} />
      ))}

      <div className="text-center mt-8 mb-4 min-h-[70px]">
        <button onClick={() => {handleScheduleClick()}} className="rounded-xl px-8 py-3 text-white font-semibold shadow-md transition-all hover:shadow-lg hover:scale-105 bg-linear-to-r from-[#B0A4F5] to-[#EDA197]">
            Schedule Now
        </button>
        </div>

    </div>
      </div>
  );
};

export default Dashboard;
