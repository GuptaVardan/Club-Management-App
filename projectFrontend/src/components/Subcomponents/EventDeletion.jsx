import { useState } from 'react' 
import '.././Form.css'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const EventDeletion = () => {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,   
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/eventDeletion/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log(data, result);
  
      if (result === "true") {
        alert("Event Deletion Successful")
        nav('/admin/home')
        
      } else {
        alert("Event Not Found. Please try again.")
      }
    } catch (error) {
      console.error("Error during finding:", error);
    }
  };
  return (
    <div>
      <h1>Event Deletion Form</h1>
      {isSubmitting && <div className='load'>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Enter Event Title' {...register("title", { required: {value: true, message: "This field is required"}, })} type="text"   />
      {errors.title && <div className='red'>{errors.title.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
      </form>
    </div>
  )
}

export default EventDeletion


