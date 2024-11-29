import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Bin from "../assets/trash-fill.svg";
import Pen from "../assets/pencil.svg";
import Modal from "react-bootstrap/Modal";

const Admin = () => {
  // Data storage
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  // Fetch Users
  const fetchUsers = async () => {
    const urlPoint = "https://6735e9325995834c8a949bbf.mockapi.io/Crud";
    try {
      const response = await axios.get(urlPoint);
      if (response && response.data) {
        setData(response.data);
        setFilteredData(response.data);
      } else {
        console.warn("No data received from API.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    const dataUrl = `https://6735e9325995834c8a949bbf.mockapi.io/Crud/${id}`;
    try {
      const response = await axios.delete(dataUrl, id);
      alert("User deleted successfully:", response.data);
      fetchUsers();
      setShow(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter data based on query
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editEmployee = (id) => {
    navigate(`/Edit-user/${id}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <div className="Content-Base">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search Name..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <Link to="/Add-user" className="add-user-btn">
              Add User
            </Link>
          </div>
          <div className="col-md-12">
            <div className="table-overflow">
              <table className="table table-dark table-hover table-stripped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Designation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData && filteredData.length > 0 ? (
                    filteredData.map((item, index) => {
                      return (
                        <tr>
                          <td>{item?.id}</td>
                          <td>{item?.name}</td>
                          <td>{item?.email}</td>
                          <td>{item?.mobile}</td>
                          <td>{item?.designation}</td>
                          <td>
                            <img
                              src={Pen}
                              className="mx-2"
                              title="Edit"
                              alt=""
                              onClick={() => editEmployee(item?.id)}
                            />
                            <img
                              src={Bin}
                              onClick={() => {
                                setShow(true);
                                setId(item?.id);
                              }}
                              alt=""
                              title="Delete"
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <p className="text-danger text-center">
                          No User's Data
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal For delete */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex  flex-column justify-content-center align-items-center">
            <label className="mb-4">Do you want to delete user ??</label>
            <button
              className="btn btn-danger btn-md"
              onClick={() => deleteUser(id)}
            >
              Delete
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Admin;
