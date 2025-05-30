import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ComingSoon from "./pages/ComingSoon";

export default function RoutePath() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}
