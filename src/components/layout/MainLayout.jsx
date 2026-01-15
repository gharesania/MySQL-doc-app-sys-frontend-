import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
