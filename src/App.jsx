import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import MainLayout from "./components/layout/MainLayout";

/* Guards */
import AuthGuard from "./guards/AuthGuard";
import RoleGuard from "./guards/RoleGuard";

/* Auth Pages */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* Common Pages */
import Profile from "./pages/common/Profile";
import NotFound from "./pages/common/NotFound";

/* Admin Pages */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllUsers from "./pages/admin/AllUsers";
import AllDoctors from "./pages/admin/AllDoctors";
import DoctorApplications from "./pages/admin/DoctorApplications";
import AllAppointments from "./pages/admin/AllAppointments";

/* Doctor Pages */
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/MyAppointments";

/* User Pages */
import UserDashboard from "./pages/user/UserDashboard";
import DoctorList from "./pages/user/DoctorList";
import BookAppointment from "./pages/user/BookAppointment";
import MyAppointments from "./pages/user/MyAppointments";
import ApplyDoctor from "./pages/user/ApplyDoctor";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          element={
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          }
        >
          {/* Profile (All Roles) */}
          <Route path="/profile" element={<Profile />} />

          {/* ADMIN ROUTES */}
          <Route
            element={<RoleGuard allowedRoles={["Admin"]} />}
          >
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AllUsers />} />
            <Route path="/admin/doctors" element={<AllDoctors />} />
            <Route path="/admin/doctor-applications" element={<DoctorApplications />} />
            <Route path="/admin/appointments" element={<AllAppointments />} />
          </Route>

          {/* DOCTOR ROUTES */}
          <Route
            element={<RoleGuard allowedRoles={["Doctor"]} />}
          >
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/appointments" element={<DoctorAppointments />} />
          </Route>

          {/* USER ROUTES */}
          <Route
            element={<RoleGuard allowedRoles={["User"]} />}
          >
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/doctors" element={<DoctorList />} />
            <Route path="/user/book-appointment" element={<BookAppointment />} />
            <Route path="/user/appointments" element={<MyAppointments />} />
            <Route path="/user/apply-doctor" element={<ApplyDoctor />} />
          </Route>
        </Route>

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
