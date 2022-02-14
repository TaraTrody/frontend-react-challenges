import { useState, ChangeEvent, FormEvent } from "react";

interface Validation {
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
  onSubmit?: () => void;
}
type Error<Type> = Partial<Record<keyof Type, string>>;
type Validations<Type extends {}> = Partial<Record<keyof Type, Validation>>;

export default function useForm<
  Type extends Record<keyof Type, any> = {}
>(options?: {
  validations?: Validations<Type>;
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
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: Error<Type> = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        const k = key as keyof Type;

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[k] = validation?.required?.message;
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

      if (options?.onSubmit) {
        options?.onSubmit();
      }
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
}
