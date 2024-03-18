import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' });
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // Fetch geolocation
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;
      const response = await fetch('http://localhost:5000/api/auth/getlocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latlong: { lat: latitude, long: longitude } }),
      });
      const { location } = await response.json();
      setAddress(location);
      // Update the credentials object with the correct field name
      setCredentials({ ...credentials, location: location }); // Change 'geolocation' to 'location'
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate password length
    if (credentials.password.length < 5) {
      alert('Password must be at least 5 characters long');
      return;
    }
    // Create user
    try {
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('token', json.authToken);
        navigate('/login');
      } else {
        alert('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
      <Navbar />
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className='m-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input type='text' className='form-control' name='name' value={credentials.name} onChange={handleChange} aria-describedby='emailHelp' />
          </div>
          <div className='m-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input type='email' className='form-control' name='email' value={credentials.email} onChange={handleChange} aria-describedby='emailHelp' />
          </div>
          <div className='m-3'>
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <fieldset>
              <input type='text' className='form-control' name='address' placeholder='Click below for fetching address' value={address} onChange={(e) => setAddress(e.target.value)} aria-describedby='emailHelp' />
            </fieldset>
          </div>
          <div className='m-3'>
            <button type='button' onClick={handleClick} name='geolocation' className='btn btn-success'>
              Click for current Location
            </button>
          </div>
          <div className='m-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input type='password' className='form-control' value={credentials.password} onChange={handleChange} name='password' />
          </div>
          <button type='submit' className='m-3 btn btn-success'>
            Submit
          </button>
          <Link to='/login' className='m-3 mx-1 btn btn-danger'>
            Already a user
          </Link>
        </form>
      </div>
    </div>
  );
}
