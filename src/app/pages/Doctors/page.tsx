"use client";
import React, { useState } from 'react'
import { ArrowBack, FilterAltOutlined, KeyboardArrowUp, Search, } from '@mui/icons-material';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Doctors = () => {
  const router = useRouter();
    const [expandedId, setExpandedId] = useState<number | null>(1);

  const psychologists = [
    {
      id: 1,
      name: 'Dr. Tejas Sharma',
      phone: '+91 98765 43210',
      image: '/assets/images/doctor1.png',
      expertise: 'Gynaecology',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      sessionFee: '₹1,500/-',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      name: 'Dr. Priya Kapoor',
      phone: '+91 98765 43210',
      image: '/assets/images/doctor2.png',
      expertise: 'IVF Specialist',
      gender: 'Female',
      sessionMode: 'In-Person & Online',
      sessionFee: '₹1,800/-',
      bgColor: 'bg-pink-100'
    },
    {
      id: 3,
      name: 'Dr. Pranav Saxena',
      phone: '+91 98765 43210',
      image: '/assets/images/doctor3.png',
      expertise: 'Gynaecology',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      sessionFee: '₹1,300/-',
      bgColor: 'bg-gray-100'
    },
    {
      id: 4,
      name: 'Dr. Toshib Bagde',
      phone: '+91 9876 543210',
      image: '/assets/images/doctor4.png',
      expertise: 'Psychologist',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      sessionFee: '₹1,500/-',
      bgColor: 'bg-amber-100'
    }
  ];

  const toggleExpand = (id:number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handelBookClick = () => {
    router.push('/pages/Session');
  }
  return (
    <div className='max-w-md  mx-auto px-4 md:px-4 bg-linear-to-b from-[#DFDAFB] to-[#F9CCC5]'>
        <div className="flex gap-2 p-4 md:p-6 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Psychologists..."
              className="w-full bg-white rounded-xl px-4 py-3 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button className="bg-white rounded-xl p-3 hover:bg-gray-50 transition-colors">
            <GridViewOutlinedIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white rounded-xl p-3 hover:bg-gray-50 transition-colors">
            <FilterAltOutlined className="w-5 h-5 text-gray-700" />
          </button>
          
        </div>
       <div className="flex gap-2 mx-6">
          <button onClick={() => router.back()} className="bg-white rounded-xl p-3 hover:bg-gray-50 transition-colors">
            <ArrowBack className="w-6 h-6 text-gray-600"/>
          </button>
        </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        <div className="space-y-4 md:space-y-6">
          {psychologists.map((doctor) => (
            
            <div key={doctor.id} className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-20 h-20 rounded-full ${doctor.bgColor} flex items-center justify-center overflow-hidden shrink-0`}>
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={80}      
                        height={80}     
                        className="object-cover rounded-full"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.phone}</p>
                      {!expandedId || expandedId !== doctor.id ? (
                        <p className="text-gray-700 font-medium mt-1">{doctor.expertise}</p>
                      ) : null}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleExpand(doctor.id)}
                    className="p-2 hover:bg-gray-100 rounded-full ml-2"
                  >
                    {expandedId === doctor.id ? (
                      <KeyboardArrowUp className="text-gray-600" />
                    ) : (
                      <KeyboardArrowDown className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {expandedId === doctor.id && doctor.gender && (
                <>
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Expertise</h4>
                          <p className="text-sm text-gray-600 mb-1">{doctor.expertise}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Session mode</h4>
                          <p className="text-sm text-gray-600 mb-1">{doctor.sessionMode}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 md:text-right">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Gender</h4>
                          <p className="text-sm text-gray-600 mb-1">{doctor.gender}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Session Fee</h4>
                          <p className="text-sm text-gray-600 mb-1">{doctor.sessionFee}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-1 border-t border-gray-100 pt-6"></div>
                  <div className="px-6 pb-6">
                    <button onClick={() => { handelBookClick()}} className="w-full py-4 rounded-2xl bg-linear-to-r from-[#B0A4F5] to-[#EDA197] text-white text-lg font-semibold hover:shadow-lg transition-shadow">
                      Book Now
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors