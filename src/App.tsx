import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AdminDashboard } from './components/AdminDashboard';
import { PublicMenu } from './components/PublicMenu';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<PublicMenu />} />
        <Route
          path="/admin"
          element={
            <AdminDashboard />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;