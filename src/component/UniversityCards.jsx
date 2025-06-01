import React from "react";

export default function UniversityCards({ universities }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {universities.map((university, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold text-center mb-8">
            {university.title}
          </h2>

          <div className="space-y-10">
            {university.details.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  } bg-white rounded-xl shadow-md overflow-hidden border border-gray-200`}
                >
                  <div className="md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.detail.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  <div className="md:w-1/2 p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.detail.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.detail.location}
                    </p>
                    <p className="text-gray-700">{item.detail.pathway}</p>
                    <p className="font-medium text-gray-800">
                      {item.detail.certificate_title}
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      {item.detail.certificate.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
