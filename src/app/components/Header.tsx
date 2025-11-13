"use client";

import { FilterAltOutlined, Search } from "@mui/icons-material";
import Image from "next/image";

export default function Header() {

  return (
    <nav className="w-full bg-linear-to-r from-[#B0A4F5] to-[#EDA197] p-4 rounded-b-[15px]">

        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-white opacity-90 text-sm md:text-base mb-1">
              Good morning,
            </p>
            <h1 className="text-white text-md md:text-2xl font-semibold">
              {"Manjunath Naik"}
            </h1>
          </div>
          <Image
            src={"/assets/images/user.png"}
            alt={"User Profile"}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
            width={48}
            height={48}
          />
        </div>

        <div className="flex gap-2 mx-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Psychologists..."
              className="w-full bg-white rounded-xl px-4 py-3 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button className="bg-white rounded-xl p-3 hover:bg-gray-50 transition-colors">
            <FilterAltOutlined className="w-5 h-5 text-gray-700" />
          </button>
        </div>
    </nav>
  );
}
