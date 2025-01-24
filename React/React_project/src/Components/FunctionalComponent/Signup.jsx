import React, { useState } from 'react';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', formData);
    } else {
      console.log('Signup:', formData);
      setIsLogin(true);
    }
    setFormData({ username: '', password: '' });
  };

  const handleSwitch = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isLogin ? 'Signup page' : 'Login Page'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">{isLogin ? 'Signup' : 'Login'}</button>
      </form>
      <button onClick={handleSwitch}>
        Switch to {isLogin ? 'Login' : 'Signup'}
      </button>
    </div>
  );
};

export default Signup;