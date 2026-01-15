import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../styles/Sidebar.css'
// import jwtDecode from "jwt-decode";

const Sidebar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token6163");

  let role = null;

  if (token) {
    const decoded = jwtDecode(token);
    role = decoded.role;
  }

  const logout = () => {
    localStorage.removeItem("token6163");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h5 className="text-center py-3">Doctor App</h5>

      <Nav className="flex-column px-3">

        {/* ADMIN */}
        {role === "Admin" && (
          <>
            <Nav.Link onClick={() => navigate("/admin/dashboard")}>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/admin/users")}>
              All Users
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/admin/doctors")}>
              All Doctors
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/admin/doctor-applications")}>
              Doctor Applications
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/admin/appointments")}>
              All Appointments
            </Nav.Link>
          </>
        )}

        {/* DOCTOR */}
        {role === "Doctor" && (
          <>
            <Nav.Link onClick={() => navigate("/doctor/dashboard")}>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/doctor/appointments")}>
              My Appointments
            </Nav.Link>
          </>
        )}

        {/* USER */}
        {role === "User" && (
          <>
            <Nav.Link onClick={() => navigate("/user/dashboard")}>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/user/doctors")}>
              Doctors
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/user/book-appointment")}>
              Book Appointment
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/user/appointments")}>
              My Appointments
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/user/apply-doctor")}>
              Apply For Doctor
            </Nav.Link>
          </>
        )}

        {/* COMMON */}
        <Nav.Link onClick={() => navigate("/profile")}>
          Profile
        </Nav.Link>

        <Nav.Link onClick={logout} className="text-danger">
          Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
