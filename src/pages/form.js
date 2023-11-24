import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <br></br>
      <br></br>
      <input type="text" placeholder="Email..." {...register("email")}/>
      <br></br>
      <input type="number" placeholder="Age..." {...register("age")}/>
      <br></br>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <br></br>
      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <br></br>
      <input type="submit" />
    </form>
  )
}

export default Form; 
