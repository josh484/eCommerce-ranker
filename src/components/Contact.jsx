import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSpeechTextChange = (speechText) => {
    setFormData({ ...formData, message: speechText });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact-form  col-12 d-flex justify-content-center">
      <div className="row col-12 ">
        <div className="row">
          <form action='https://getform.io/f/473a6617-2be3-4c30-959e-0184c9b15914' method='POST' className="col-12 fs-4 d-flex flex-column justify-content-center contact">
            <h2 className="mb-5">Contact Me</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary fs-4 contactBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;