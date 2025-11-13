import Image from 'next/image';
import React from 'react'

type PersonCardProps = {
    label: string;
    name: string;
    phone: string;
    avatarUrl: string;
}
const PersonCard = ({label, name, phone, avatarUrl}:PersonCardProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-500 mb-2 block">{label}</label>
      <div className="flex items-center gap-3 bg-white/70 rounded-lg p-3 shadow-sm">
        {/* <img 
          src={avatarUrl || `/api/placeholder/48/48`}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        /> */}
<Image
                        src={avatarUrl}
                        alt={name}
                        width={80}      
                        height={80}     
                        className="object-cover rounded-full"
                      />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard