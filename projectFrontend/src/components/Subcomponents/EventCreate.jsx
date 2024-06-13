import '.././Form.css'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
 

const EventCreate = () => {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,    
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/eventCreate/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    alert("Event Creation Successful!")
    nav('/admin/home')
  }
  return (
    <div>
      <h1>Event Creation Form</h1>
      {isSubmitting && <div className='load'>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter Event Title' {...register("title", { required: {value: true, message: "This field is required"}, })} type="text"   />
        {errors.title && <div className='red'>{errors.title.message}</div>}
        <input id='text-area' placeholder='Enter Event Description'  {...register("description", { required: {value: true, message: "This field is required"},})} type="text-area"/>
        {errors.description && <div className='red'>{errors.description.message}</div>}
        <input type="datetime-Local" {...register("time", { required: {value: true, message: "This field is required"},})}/>
        {errors.time && <div className='red'>{errors.time.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
      </form>
    </div>
  )
}

export default EventCreate

