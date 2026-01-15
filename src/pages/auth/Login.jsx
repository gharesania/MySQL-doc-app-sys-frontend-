import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "../../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

// import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);

      // ✅ THIS IS THE ONLY CORRECT CHECK
      if (res.data.success) {
        localStorage.setItem("token6163", res.data.token);

        toast.success(res.data.msg || "Login successful");

        navigate("/profile"); // or dashboard redirect
      } else {
        toast.error(res.data.msg || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <Container fluid className="login-container">
      <Card className="login-card">
        <h3>Login</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="login-btn w-100">
            Login
          </Button>

          <div className="login-footer">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
