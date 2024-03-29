import { useState, useEffect } from "react";
import {
  Table,
  Container,
  Row,
  Button,
  ButtonGroup,
  Form,
  Navbar,
  Col,
} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
const api = "http://localhost:5000/users";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get(api);
    setData(response.data);
  };
  console.log(data);

  return (
    <>
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>
          Build and Deploy React CRUD Operation App using JSON server on Heroku
        </Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <h2>Form</h2>
          </Col>
          <Col md={8}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data &&
                data.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.address}</td>
                        <td>
                          <ButtonGroup>
                            <Button
                              style={{ marginRight: "5px" }}
                              variant="secondary"
                            >
                              Update
                            </Button>
                            <Button
                              style={{ marginRight: "5px" }}
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
