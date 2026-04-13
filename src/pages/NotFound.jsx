import React from 'react'
import { Link, useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center z-10">
        {/* Large Background Text */}
        <h1 className="text-[12rem] md:text-[18rem] font-black opacity-5 select-none leading-none tracking-tighter">
          404
        </h1>

        {/* Floating Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center animate-bounce duration-[3000ms]">
          <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Lost in Space
          </span>
        </div>
      </div>

      {/* Messaging */}
      <div className="mt-8 text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-neutral-200">
          This page doesn't exist.
        </h2>
        <p className="text-neutral-400 mb-10 leading-relaxed">
          The link you followed might be broken, or the page may have been removed.
          Don't worry, even the best explorers get lost sometimes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all duration-300 active:scale-95 text-center"
          >
            Return Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer w-full sm:w-auto px-8 py-4 border border-neutral-800 font-medium rounded-xl hover:bg-neutral-900 transition-all duration-300 text-neutral-300"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Footer Branding (Optional) */}
      <p className="absolute bottom-8 text-neutral-600 text-sm font-mono tracking-widest uppercase">
        Error Code: 0x404_NOT_FOUND
      </p>

      {/* Tailwind Custom Animation Injection */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce {
          animation: bounce 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default NotFound