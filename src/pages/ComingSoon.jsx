import React from "react";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="text-center animate-pulse">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          We're building something amazing. Stay tuned!
        </p>
        <div className="mt-8 flex justify-center gap-3 animate-bounce">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
