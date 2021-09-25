import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState(options.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;

    setData({
      ...data,
      [key]: value,
    });
  };

  return {
    data,
    errors,
    handleChange,
  }
};
