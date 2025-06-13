"use client"
import useInView from '@/hooks/useInView';
import '../styles/Animation.css';
import { Award, MapPin, UsersRoundIcon } from "lucide-react"
export default function Success(){
      const { ref, isInView } = useInView();
    return (
        <>
          <div ref={ref} className="bg-gradient-to-br from-gray-300 to-green-300 text-white w-full h-[100vh] flex flex-col space-y-10 p-10 justify-center items-center">
          <h2 className={`text-8xl font-bold  ${isInView ? 'animate-from-right' : 'opacity-0'} `}>SUCCESS</h2>
          <p className={`text-2xl font-medium ${isInView ? 'animate-from-top':'opacity-0'}`}>Living your dream, building your future in the Gulf</p>
        <div className={`grid grid-cols-3 gap-7 ${isInView ? 'animate-scale' : 'opacity-0' } `}>
            <div className="flex flex-col space-y-3 items-center justify-center bg-transparent w-[150px] shadow p-3">
             <UsersRoundIcon className="w-12 h-12"/>
             <p className="text-4xl font-bold">5000+</p>
             <p className="text-sm">Success Stories</p>
            </div>
            <div className="flex flex-col space-y-3 items-center justify-center bg-transparent w-[150px] shadow p-3">
               <Award className="w-12 h-12"/>
             <p className="text-4xl font-bold">98%</p>
             <p className="text-sm">Award Rate</p>
            </div>
            <div className="flex flex-col space-y-3 items-center justify-center bg-transparent w-[150px] shadow p-3">
              <MapPin className="w-12 h-12" />
             <p className="text-4xl font-bold">6</p>
             <p className="text-sm">Golf Countries</p>
            </div>
        </div>

          </div>  
        </>
    )
}