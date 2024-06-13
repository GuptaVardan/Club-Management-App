import './Form.css'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const LoginMember = () => {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    setError,    
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/login_member/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log(data, result);
  
      if (result === "true") {
        alert("Login Successful")
        nav(`/members/${data.username}`)
        
      } else {
        alert("Invalid credentials. Please try again.")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div>
      <h1>Login Form for Members</h1>
      {isSubmitting && <div className='load'>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter your Username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 5, message: "Min length is 5"}, maxLength: {value: 12, message: "Max length is 12"} })} type="text"   />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <input placeholder='Enter your password'  {...register("password", { required: {value: true, message: "This field is required"}, minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
      </form>
    </div>
  )
}

export default LoginMember


