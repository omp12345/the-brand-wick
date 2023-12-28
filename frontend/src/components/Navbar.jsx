import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import axios from 'axios';
import { url } from '../backend';

function Navbar() {
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token)

      if (!token) {
       
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${url}/api/user/logout`, {
        headers: headers,
      });

      if (response.status === 200) {
       
        localStorage.removeItem('token')
        navigate('/login'); 
        alert('User Logout');
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
        {/* <Link to="/login">Login</Link> */}
       {localStorage.getItem("token")? (<Link onClick={handlelogout} to="#">Logout</Link>):(<Link to="/login">Login</Link>)}
          
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
