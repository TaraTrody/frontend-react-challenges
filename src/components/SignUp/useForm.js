import { useState } from "react";

export default function useForm (...options) {
  const [validation, onSubmit, initialValues] = options
  const [data, setData] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;

    setData({
      ...data,
      [key]: value,
    });

    errors[key] && setErrors({ ...errors, [key]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validations = validation.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }
      if (!valid) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      if (onSubmit) {
        onSubmit();
      }
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
};
