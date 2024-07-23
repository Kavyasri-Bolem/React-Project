import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './listUser'; // Import the UserList component

const AddUser = ({ onUserAdded }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [highlightFields, setHighlightFields] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false); // Add a state to track success

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const missingFields = [];
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!email) missingFields.push('email');
    if (!phoneNo) missingFields.push('phoneNo');
    if (!password) missingFields.push('password');

    if (missingFields.length > 0) {
      setFormError('Please Provide the Highlighted values');
      setHighlightFields(missingFields);
      return;
    } else {
      setFormError('');
      setHighlightFields([]);
    }

    try {
      const response = await axios.post('http://localhost:8080/users/add', {
        firstName,
        lastName,
        email,
        phoneNo,
        password
      });
      console.log(response.data);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNo('');
      setPassword('');
      setIsSuccess(true); // Set isSuccess to true upon successful response
      onUserAdded();
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="p-4" id="addUser" style={{ width: '750px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ced4da' }}>
    {isSuccess ? ( // Conditionally render the UserList component
          <UserList />
        ) : (
          <>
      <h2 className="mb-4">Add User</h2>
      <form id="userForm" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">First Name:</label>
            <input
              id='firstName'
              type="text"
              className={`form-control ${highlightFields.includes('firstName') ? 'is-invalid' : ''}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">Last Name:</label>
            <input
              id='lastName'
              type="text"
              className={`form-control ${highlightFields.includes('lastName') ? 'is-invalid' : ''}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              id='email'
              type="text"
              className={`form-control ${highlightFields.includes('email') ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="phoneNo" className="form-label">Phone Number:</label>
            <input
              id='phoneNo'
              type="text"
              className={`form-control ${highlightFields.includes('phoneNo') ? 'is-invalid' : ''}`}
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              id='password'
              type="password"
              className={`form-control ${highlightFields.includes('password') ? 'is-invalid' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
      {formError && <div className="alert alert-danger mt-3">{formError}</div>}
      </>
        )}
    </div>
  </div>
  
  );
};

export default AddUser;
