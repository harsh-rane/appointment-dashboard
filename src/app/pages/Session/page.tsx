"use client";
import React, { useState } from 'react'
import PersonCard from '../../components/PersonCard'
import { CalendarMonth, KeyboardAltRounded, LockClock } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/navigation';
const ScheduleSession = () => {
    const router = useRouter();
    const [sessionMode, setSessionMode] = useState('in-person');
    const [sessionType, setSessionType] = useState('Counselling (1 hour)');
    const [sessionDate, setSessionDate] = useState('11/12/2024');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionDetails, setSessionDetails] = useState('');
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [slot, setSlot] = useState<Dayjs | null>(dayjs());   
    const [sessionLink, setSessionLink] = useState<string>('');

    const handleConfirm = () => {
      router.push("/pages/Dashboard")
    }
  return (
    <div className='max-w-md mx-auto px-4 md:px-4 bg-linear-to-b from-[#DFDAFB] to-[#F9CCC5]'>
    <div className="p-4">
      <div className="max-w-md mx-auto">
        <div className="p-6 space-y-6">
          {/* Patient Card */}
          <PersonCard
            label="Patient"
            name="Shubham Naik"
            phone="+91 9876543210"
            avatarUrl="/assets/images/patient1.png"
          />

          {/* Assign Practitioner Card */}
          <PersonCard
            label="Assign Practitioner"
            name="Saria Dilan"
            phone="+91 9876543210"
            avatarUrl="/assets/images/doctor5.png"
          />

          {/* Session Type */}
          <div>
            <label className="text-sm text-gray-500 mb-2 block">Session Type</label>
            <div className="relative">
              <select
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
                className="w-full bg-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800 font-bold"
              >
                <option>Counselling (1 hour)</option>
                <option>Therapy (45 min)</option>
                <option>Consultation (30 min)</option>
              </select>
              <KeyboardArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Session Mode */}
          <div>
            <label className="text-sm text-gray-500 mb-2 block">Session Mode</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sessionMode"
                  value="in-person"
                  checked={sessionMode === 'in-person'}
                  onChange={(e) => setSessionMode(e.target.value)}
                  className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-800 font-medium">In-Person</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sessionMode"
                  value="online"
                  checked={sessionMode === 'online'}
                  onChange={(e) => setSessionMode(e.target.value)}
                  className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-800 font-medium">Online</span>
              </label>
            </div>
          </div>

          {/* Session Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 mb-2 block">Session Date</label>
              <div className="relative">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        // label="Select date"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        className='bg-white '
                    />
                </LocalizationProvider>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block">Session Time Slot</label>
              <div className="relative">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopTimePicker
                        value={slot}
                        onChange={(newValue) => setSlot(newValue)}
                        className='bg-white '
                    />
                </LocalizationProvider>
                </div>
            </div>
          </div>

          {sessionMode === 'online' && (
            <div>
              <label className="text-sm text-gray-500 mb-2 block">Session Link</label>
              <input
                type="text"
                value={sessionLink}
                onChange={(e) => setSessionLink(e.target.value)}
                className="w-full bg-white rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
                placeholder="Enter session link here"
              />
            </div>
          )}


          {/* Session Details */}
          <div>
            <label className="text-sm text-gray-500 mb-2 block">Session Details (Optional)</label>
            <textarea
              value={sessionDetails}
              onChange={(e) => setSessionDetails(e.target.value)}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800 min-h-[100px] resize-none"
              placeholder="Enter session details here"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="py-3 px-6 rounded-lg border-2 border-[#CC627B] text-[#CC627B] font-semibold hover:bg-purple-50 transition-colors">
              Cancel
            </button>
            <button onClick={() => handleConfirm()} className="py-3 px-6 rounded-lg bg-linear-to-r from-[#BBA3E4] to-[#E7A1A0] text-white font-semibold transition-colors">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ScheduleSession