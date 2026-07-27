import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  const navigate = useNavigate()
  function handleForm(e){
      e.preventDefault()
      const data = {name,email,mobile,department,course}
      axios.post("http://localhost:3000/users",data)
      .then(()=>{
          toast.success("Student Added...")
          setName("")
          setEmail("")
          setMobile("")
          setDepartment("")
          setCourse("")
          navigate("/viewstudent")
      })
      .catch(err=>toast.error("Failed to Add..."))
  }
  return (
    <>
    <Navbar/>
      <center><h1>Add Student</h1></center>
      <center>
  <div className="student-form">
    <h1>Add Student</h1>

    <form onSubmit={handleForm}>

      <input
        type="text"
        placeholder="👤 Full Name"
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="📧 Email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="📱 Mobile Number"
        required
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
      />

      <input
        type="text"
        placeholder="🏫 Department"
        required
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
      />

      <input
        type="text"
        placeholder="📚 Course"
        required
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
      />

      <button type="submit">Add Student</button>

    </form>
  </div>
</center>
    </>
  )
}

export default AddStudent