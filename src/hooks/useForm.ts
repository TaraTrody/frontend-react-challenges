import { useState, ChangeEvent, FormEvent } from "react";

type Validation = {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string | RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
};
type Error<Type> = Partial<Record<keyof Type, string>>;
type Validations<Type> = Partial<Record<keyof Type, Validation>>;

export default function useForm<
  Type extends Record<keyof Type, any> = {}//do i need optional default if validations not optional or should it be optional?
>(options: {
  validations: Validations<Type>;
  initialValues?: Partial<Type>;
  onSubmit?: () => void;
}) {
  const [data, setData] = useState<Type>(
    (options?.initialValues || {}) as Type
  );
  const [errors, setErrors] = useState<Error<Type>>({});

  const handleChange =
    <S extends unknown>(key: keyof Type, sanitizeFn?: (value: string) => S) =>
    (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;

      setData({
        ...data,
        [key]: value,
      });

      errors[key] && setErrors({ ...errors, [key]: "" });
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validations = options.validations;
    const newErrors: Error<Type> = {};

    for (const key in validations) {
      if (document.body.contains(document.getElementById(key))) {
        const value = data[key];
        const validation = validations[key];
        const k = key as keyof Type;

        if (validation?.required?.value && !value) {
          newErrors[k] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          newErrors[key] = custom.message;
        }
      }
    }
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (options?.onSubmit) {
      options?.onSubmit();
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
}
