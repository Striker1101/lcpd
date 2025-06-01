import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ComingSoon from "./pages/ComingSoon";
import UniversityPathways from "./pages/UniversityPathways";
import Programs from "./pages/programs";
// import { HelmetProvider } from "react-helmet-async";

export default function RoutePath() {
  return (
    <div>
      {/* <HelmetProvider> */}
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route  path="/programs" element={<Programs />} />
          <Route
            
            path="/university_pathway"
            element={<UniversityPathways />}
          />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      {/* </HelmetProvider> */}
    </div>
  );
}
