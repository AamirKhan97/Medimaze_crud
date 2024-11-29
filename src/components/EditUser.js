import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
  });

  //   Bind data with react state
  const handleData = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  //   Get user by id
  const fetchSingleUser = async () => {
    const dataUrl = `https://6735e9325995834c8a949bbf.mockapi.io/Crud/${id}`;
    try {
      const response = await axios.get(dataUrl);
      if(response && response.data) {
        let data = response?.data;
        setEmployeeData({
            ...employeeData,
            name : data?.name,
            email : data?.email,
            mobile : data?.mobile,
            designation : data?.designation
        })
      }
    } catch (error) {
      console.log("Error fetching employee", error);
    }
  };

  //   Edit employee function
  const editEmployee = async () => {
    const dataUrl = `https://6735e9325995834c8a949bbf.mockapi.io/Crud/${id}`;
    try {
      const response = await axios.put(dataUrl, employeeData);
      if (response && response.data) {
        alert("Employee Edited Succesfully");
        navigate("/Admin-panel");
      }
    } catch (error) {
      console.error("Error Adding Employee:", error);
    }
  };

  const submitEmployee = (e) => {
    e.preventDefault();
    if (employeeData) {
      console.log("Fields done");
      editEmployee();
    } else {
      console.log("Error");
    }
  };

  //   UseEffect for fetching single user
  useEffect(() => {
    fetchSingleUser();
  }, []);

  return (
    <React.Fragment>
      <div id="manageUserBase">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="form-box">
              <h1 className="headingTag">Edit Employee</h1>
              <form onSubmit={submitEmployee}>
                <div className="formGroup">
                  <label>Employee Name</label>
                  <input
                    name="name"
                    value={employeeData.name}
                    onChange={handleData}
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label>Employee Email</label>
                  <input
                    name="email"
                    value={employeeData.email}
                    onChange={handleData}
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label>Employee Mobile</label>
                  <input
                    name="mobile"
                    value={employeeData.mobile}
                    onChange={handleData}
                    type="text"
                    className="form-control"
                    required
                    maxLength="10"
                    pattern="\d{10}"
                  />
                </div>
                <div className="formGroup">
                  <label>Employee Designation</label>
                  <input
                    name="designation"
                    value={employeeData.designation}
                    onChange={handleData}
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="formGroup d-flex justify-content-center">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="Edit Employee"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditUser;
