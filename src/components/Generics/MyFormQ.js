import React from 'react';
import { useFormContext } from './FormContext'; // Import the context

const MyFormQ = () => {
  const {
    formSubmitted,
    setFormSubmitted,
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReturn,
  } = useFormContext(); // Use the context values

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

export default MyFormQ;
