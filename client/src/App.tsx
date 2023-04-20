import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/student";
import CompanyLayout from 'layouts/company'
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="student/*" element={<AdminLayout />} />
      <Route path="company/*" element={<CompanyLayout/>} />
      <Route path="/" element={<Navigate to="/student" replace />} />
      <Route path="/company" element={<Navigate to="/company/jobs" replace />} />
      <Route path="/company/route" element={<Navigate to="/student" replace />} />
      <Route path="/student/route" element={<Navigate to="/company" replace />} />
    </Routes>
  );
};

export default App;
