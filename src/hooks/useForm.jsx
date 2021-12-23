import { useState } from 'react';

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setValues({ ...values, [name]: files });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await onSubmit();
    setIsLoading(false);
  };

  return {
    values,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
