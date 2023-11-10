import React, { useState } from 'react';

const MyForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      validationErrors.name = 'Name must be at least 3 characters';
    } else if (!/^[a-zA-Z-'\\s]+$/.test(formData.name)) {
      validationErrors.name = 'You must enter a valid name';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(formData.email)) {
      validationErrors.email = 'You must enter a valid email address';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    } else if (formData.message.trim().split(' ').length < 5) {
      validationErrors.message = 'Message must be at least 5 words';
    }

    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleBlur(); 

    if (Object.keys(errors).length === 0) {
      const json = JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      try {
        const res = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: json,
        });

        if (res.status === 200) {
          console.log('Form submitted successfully');
          setFormSubmitted(true);
        } else {
          const data = await res.text();
          console.error(`Error: ${data}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleReturn = () => {
    setFormSubmitted(false);
  };

  return (
    <div>
      {formSubmitted ? (
        <div className="Submitted">
          <p>Form submitted successfully!</p>
          <button className="return-button" onClick={handleReturn}>
            Return to Form
          </button>
        </div>
      ) : (
        <form className="form-1" onSubmit={handleSubmit} noValidate>
          <div className="input-container">
            <input id="name" type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} onBlur={handleBlur}/>
            <span className="error">{errors.name}</span>
          </div>

          <div className="input-container">
            <input id="email" type="text" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} onBlur={handleBlur}/>
            <span className="error">{errors.email}</span>
          </div>

          <div className="input-container-2">
            <textarea id="message" name="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} onBlur={handleBlur}/>
            <span className="error">{errors.message}</span>
          </div>

          <div className="input-container-1">
            <button type="submit" className="btn-yellow-long">
              Send Message<i className="fa-regular fa-arrow-up-right"></i>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyForm;
