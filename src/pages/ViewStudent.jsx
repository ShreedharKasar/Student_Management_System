import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const ViewStudent = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()
  function fetchData(){
    axios.get("http://localhost:3000/users")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }
  function handleDelete(id){
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(()=>{
      toast.success("Deleted")
      fetchData()
    })
    .catch(err=>console.log(err)
    )
  }
    return (
    <>
    <Navbar/>
      <center><h1>Student List</h1></center>
      {students.map((x)=>{
        return <div>
          <h3>Name: {x.name}</h3>
          <p><b>Email:</b> {x.email}</p>
          <p><b>Mobile:</b> {x.mobile}</p>
          <p><b>Department:</b> {x.department}</p>
          <p><b>Course:</b> {x.course}</p>
          <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
          <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent