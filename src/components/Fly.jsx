"use client"
import useInView from '@/hooks/useInView';
import { Plane } from "lucide-react";
import "../styles/Animation.css"

export default function Fly() {
      const { ref, isInView } = useInView();
  const flights = [
    { destination: "Dubai (DXB)", time: "14:30", status: "Boarding" },
    { destination: "Riyadh (RUH)", time: "16:45", status: "On Time" },
    { destination: "Doha (DOH)", time: "18:20", status: "On Time" },
    { destination: "Kuwait (KWI)", time: "20:15", status: "On Time" },
  ];
  return (
    <>
      <div ref={ref} id='fly' className="relative bg-gradient-to-br from-blue-200 to-blue-500 text-white w-full h-[100vh] flex flex-col space-y-10 p-10 justify-center items-center overflow-hidden">
                 <div className="absolute top-20 left-220 
                 float-plane z-0">
                    <Plane className="w-[200px] h-[90px]"/>
                 </div>
        <div className='z-10 text-center'>
        <h2 className={`text-8xl font-bold ${isInView ? 'animate-from-top' : 'opacity-0'}`}>FLY</h2>
        <p className={`text-2xl font-medium ${isInView ? 'animate-from-right' : 'opacity-0'}`}>
          Your journey to success begins with a single flight
        </p>

        <div className={`w-[500px] mx-auto mt-10 p-6 bg-gray-700 rounded-xl shadow-lg  ${
            isInView ? 'animate-scale-in' : 'opacity-0'
          }`}>
          <h2 className="text-center text-2xl font-bold mb-6 tracking-widest">
            DEPARTURES
          </h2>
          {flights.map((flight, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 py-2 border-b text-gray-800 last:border-none `}
            >
              <span className="text-white">{flight.destination}</span>
              <span className="text-center text-white">{flight.time}</span>
              <span className={`text-right pr-4 w-[100px] rounded-sm ${flight.status === "Boarding" ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`} >{flight.status}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
