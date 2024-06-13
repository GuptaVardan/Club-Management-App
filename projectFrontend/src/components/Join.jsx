import './Form.css'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    watch,    
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    if (res === "false") {
      alert("Joining Successful")
      nav("/")
    }else {
      alert("Member with same username already exists. Please try other credentials")
    }
    
  }
  return (
    <div>
      <h1>Registration Form</h1>
      {isSubmitting && <div className='load'>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter your Username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 5, message: "Min length is 5"}, maxLength: {value: 12, message: "Max length is 12"} })} type="text"   />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <input placeholder='Enter your password'  {...register("password", { required: {value: true, message: "This field is required"}, minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <input placeholder='Confirm your password'  {...register("confirmPassword", {required: {value: true, message: "This field is required"},validate: (value) => value === watch("password") || "Password doesn't match",})} type="password"/>
        {errors.confirmPassword && <div className='red'>{errors.confirmPassword.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
      </form>
    </div>
  )
}

export default Join

