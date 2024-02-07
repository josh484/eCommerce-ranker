import React, { useState } from "react";
function Contact () {
    const [ formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
    console.log(e)
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
    }
    return (
      <div>
        hello bro
        <input type="text" name="fullname" onChange={handleChange} />
      </div>
    );
}

export default Contact;