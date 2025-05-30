import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
export default function RoutePath() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        {/* <Route index path="/" element={<Homepage />} /> */}
      </Routes>
    </div>
  );
}
