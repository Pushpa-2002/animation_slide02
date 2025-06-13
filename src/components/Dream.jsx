"use client"
import useInView from '@/hooks/useInView';
import '../styles/Animation.css';
export default function Dream() {
    const { ref, isInView } = useInView();
  return (
    <div className="relative w-full h-[100vh] bg-gradient-to-br from-yellow-300 to-purple-500 text-white flex flex-col space-y-10 p-10 justify-center items-center overflow-hidden">
      
      {/* Background floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm float-circle z-0"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full backdrop-blur-sm float-circle-slow z-0"></div>

      {/* Foreground content */}
      <div className="z-10 text-center">
        <h2 className="text-8xl font-bold">DREAM</h2>
        <p className="text-xl font-medium">Every journey begins with a vision of a better future</p>
        <ul className="mt-8 border-[10px] rounded-xl p-4 w-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-black border-black">
          <li>Gulf Job Opportunities </li>
          <li>🇦🇪 Dubai - Software Engineer</li>
          <li>🇸🇦 Riyadh - Project Manager</li>
          <li>🇶🇦 Doha - Marketing Specialist</li>
        </ul>
      </div>
    </div>
  );
}
