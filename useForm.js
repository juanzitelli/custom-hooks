import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const resetForm =  () => {
    setFormState(initialState)
  }

  const handleInputChange = ({ target }) => {
    // console.log("target",target)
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return [formState, handleInputChange, resetForm]
};

export default useForm;
