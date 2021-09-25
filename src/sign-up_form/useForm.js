import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState(options.initialValues || {});
  const [errors, setErrors] = useState({});
};
