// components/Login.jsx
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");

  function generateCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputCaptcha !== captcha) {
      alert("Incorrect CAPTCHA");
      return;
    }

    const username = e.target.username.value;
    onLogin(username);
  };

  return (
    <div className="login-screen">

      <div className="login-card">

        {/* TOP HEADER */}
        <div className="login-card-header">
          <i className="fa-solid fa-graduation-cap login-logo-icon"></i>
          <h2>EduERP Login</h2>
          <p>Enter your credentials to access the system</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="login-form">

          <label className="input-label">Username</label>
          <div className="input-box">
            <input type="text" name="username" placeholder="Enter your username" required />
            <i className="fa-solid fa-user input-icon"></i>
          </div>

          <label className="input-label">Password</label>
          <div className="input-box">
            <input type="password" placeholder="Enter your password" required />
            <i className="fa-solid fa-lock input-icon"></i>
          </div>

          <label className="input-label">Enter CAPTCHA</label>
          <div className="captcha-row">
            <div className="captcha-box">{captcha}</div>
            <button type="button" className="captcha-refresh" onClick={refreshCaptcha}>
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter the CAPTCHA code"
            className="captcha-input"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
            required
          />

          <button className="login-btn">Login</button>

          <div className="login-footer">
            Forgot your <a href="#">username</a> or <a href="#">password</a>?
          </div>

        </form>
      </div>

    </div>
  );
}
