import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

  const [email, setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data.status === "success"){
        localStorage.setItem('userId', result.data.userId)
          navigate('/home');
      }
      else{
        console.log(result.data);
        alert("No data found")
      }

     
    })
    .catch(err => console.log(err)); 
  }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center">Login</h2>
        <form action="" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              id="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Haven't account</p>
          <Link to={"/"} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Signup
          </Link>
      </div>
    </div>
  );
}

export default Login;

