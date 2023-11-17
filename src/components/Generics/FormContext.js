import React, { useState, createContext, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
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

  const values = {
    formSubmitted,
    setFormSubmitted,
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReturn,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
