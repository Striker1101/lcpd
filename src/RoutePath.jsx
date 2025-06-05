import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ComingSoon from "./pages/ComingSoon";
import UniversityPathways from "./pages/UniversityPathways";
import Programs from "./pages/programs";
import MultimediaProductDesign from "./pages/programs/long/multimedia_product_design";
import NetworkingCybersecurity from "./pages/programs/long/networking_cybersecurity";
import SoftwareEngineering from "./pages/programs/long/software_engineering";
import ShowShortCourse from "./pages/programs/short/[couse]";
import About from "./pages/About";
// import { HelmetProvider } from "react-helmet-async";

export default function RoutePath() {
  return (
    <div>
      {/* <HelmetProvider> */}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="programs">
          <Route index element={<Programs />} />
          <Route path="long_course">
            <Route
              path="multimedia_product_design"
              element={<MultimediaProductDesign />}
            />
            <Route
              path="network_cyber_security"
              element={<NetworkingCybersecurity />}
            />
            <Route
              path="software_engineering"
              element={<SoftwareEngineering />}
            />
          </Route>

          <Route path="short_course">
            <Route path=":slug" element={<ShowShortCourse />} />
          </Route>
        </Route>
        <Route path="university_pathway" element={<UniversityPathways />} />
        <Route path="about_us" element={<About />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      {/* </HelmetProvider> */}
    </div>
  );
}
