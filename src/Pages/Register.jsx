import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamName: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover text-white"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="backdrop-blur-lg bg-black/30 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Registration
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-black transition-all font-bold uppercase tracking-wider text-sm"
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-black transition-all font-bold uppercase tracking-wider text-sm"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-black transition-all font-bold uppercase tracking-wider text-sm"
              required
              placeholder="Enter team name"
            />
          </div>
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-black transition-all font-bold uppercase tracking-wider text-sm"
              required
              placeholder="Enter mobile number"
            />
          </div>
          <button
            type="submit"
            className="fancy w-full"
          >
            <span className="top-key"></span>
            <span className="text">Register Now</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>

        <style jsx>{`
          .fancy {
            background-color: transparent;
            border: 2px solid #fff;
            border-radius: 0;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin: 0;
            outline: none;
            overflow: visible;
            padding: 1.25em 2em;
            position: relative;
            text-align: center;
            text-decoration: none;
            text-transform: none;
            transition: all 0.3s ease-in-out;
            user-select: none;
            font-size: 13px;
          }

          .fancy .text {
            font-size: 1.125em;
            line-height: 1.33333em;
            display: block;
            text-align: center;
            transition: all 0.3s ease-in-out;
            text-transform: uppercase;
            text-decoration: none;
            color: white;
          }

          .fancy .top-key {
            height: 2px;
            width: 1.5625rem;
            top: -2px;
            left: 0.625rem;
            position: absolute;
            background: #e8e8e8;
            transition: width 0.5s ease-out, left 0.3s ease-out;
          }

          .fancy .bottom-key-1,
          .fancy .bottom-key-2 {
            height: 2px;
            width: 1.5625rem;
            right: 1.875rem;
            bottom: -2px;
            position: absolute;
            background: #e8e8e8;
            transition: width 0.5s ease-out, right 0.3s ease-out;
          }

          .fancy .bottom-key-2 {
            width: 0.625rem;
            right: 0.625rem;
          }

          .fancy:hover {
            color: black;
            background: white;
          }

          .fancy:hover .text {
            color: black;
          }

          .fancy:hover .top-key {
            left: -2px;
            width: 0;
          }

          .fancy:hover .bottom-key-1,
          .fancy:hover .bottom-key-2 {
            right: 0;
            width: 0;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Register;
