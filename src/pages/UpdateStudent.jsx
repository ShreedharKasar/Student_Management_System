import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const UpdateStudent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")
    const {id} = useParams()
    console.log(id);

    const navigate = useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${id}`)
      .then(x=>{
        setName(x.data.name)
        setEmail(x.data.email)
        setMobile(x.data.mobile)
        setDepartment(x.data.department)
        setCourse(x.data.course)
      })
    },[])

    function handleUpdate(e){
        e.preventDefault()
        const newData = {name,email,mobile,department,course}
        axios.put(`http://localhost:3000/users/${id}`,newData)
        .then(()=>{
          toast.success("Updated....")
          navigate("/viewstudent")
        })
        .catch(err=>toast.error("Failed to Update"))

    }
  return (
    <>
    <Navbar/>
    <div className="update-container">
    <div className="update-card">
    <h1> Update Student</h1>

    <form onSubmit={handleUpdate}>

      <input
        type="text"
        placeholder="👤 Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="📧 Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="📱 Mobile Number"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="🏫 Department"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="📚 Course"
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
        required
      />

      <button type="submit" className="update-btn">
        Update Student
      </button>

    </form>
  </div>
</div>
    </>
  )
}

export default UpdateStudent