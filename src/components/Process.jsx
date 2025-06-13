"use client"
import useInView from '@/hooks/useInView';
import '../styles/Animation.css';

export default function Process() {
    const { ref, isInView } = useInView();
  return (
    <>
      <div ref={ref} id='process' className="bg-gradient-to-br from-purple-500 via-blue-500 to-pink-400 text-white w-full h-[100vh] flex flex-col space-y-10 p-10 justify-center items-center">
        <h2 className={`text-8xl font-bold ${isInView ? 'animate-from-top' : 'opacity-0'} `}>PROCESS</h2>
        <p className={`text-2xl font-medium ${isInView ? 'animate-from-right' : 'opacity-0'}`}>
          We handle the complex procedures while you focus on your future
        </p>

        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { icon: "📋", label: "Application" },
            { icon: "🏛️", label: "Embassy" },
            { icon: "✅", label: "Approval" },
            { icon: "🎫", label: "Visa" },
            { icon: "✈️", label: "Travel" },
          ].map((step, index) => (
            <div key={index}>
              <div className={`flex flex-col items-center justify-center w-15 h-15 bg-gray-100 opacity-[0.75] shadow rounded-full ${
                  isInView ? 'list-item-fade' : 'opacity-0'
                } `} style={isInView ? { animationDelay: `${(index + 1) * 0.3}s` } : {}} >
                <div className="text-2xl mb-2 relative opacity-[1]">{step.icon}</div>
              </div>
              <div className="text- font-medium mt-3">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
