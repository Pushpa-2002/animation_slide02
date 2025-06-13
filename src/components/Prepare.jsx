"use client"
import useInView from '@/hooks/useInView';
import '../styles/Animation.css';

export default function Prepare() {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref} id='prepare'
      className="bg-gradient-to-br from-red-400 to-blue-400 text-black w-full max-h-[100vh] flex flex-col space-y-10 p-10 py-20 justify-center items-center overflow-hidden"
    >
      {/* Heading */}
      <h2 className={`text-8xl font-bold ${isInView ? 'animate-from-top' : 'opacity-0'}`}>
        PREPARE
      </h2>

      {/* Paragraph */}
      <p className={`text-2xl font-medium ${isInView ? 'animate-from-right' : 'opacity-0'}`}>
        Expert guidance through every document and requirement
      </p>

      <div className="flex justify-center items-center gap-12 mt-6">
        {/* Consultant Box */}
        <div
          className={`p-6 h-[200px] bg-white rounded-xl shadow-md text-center space-y-4 ${
            isInView ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <div className="bg-gray-900 rounded-lg p-4 relative">
            <div className="absolute top-2 left-3 flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="mt-5">
              <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md text-sm">
                Video Consultation in Progress…
              </button>
            </div>
          </div>

          <div>
            <p className="text-gray-800 font-semibold">
              Your Consultant: <span className="font-bold">Sarah Ahmed</span>
            </p>
            <p className="text-gray-500 text-sm">Visa Success Rate: 98%</p>
          </div>
        </div>

        {/* Checklist */}
        <div className="mb-10 max-h-[200px]">
          <ul className="space-y-4">
            {[
              '✅ Passports & Documents',
              '✅ Financial Proof',
              '✅ Academic Certificates',
              '✅ Language Test Results',
              '✅ Work Experience Letters',
            ].map((item, index) => (
              <li
                key={index}
                className={`bg-white rounded-lg py-2 w-[300px] ${
                  isInView ? 'list-item-fade' : 'opacity-0'
                }`}
                style={isInView ? { animationDelay: `${(index + 1 )* 0.3}s` } : {}}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
