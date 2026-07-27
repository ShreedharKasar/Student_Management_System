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
    <div className="student-container">
    <h1 className="title">🎓 Student Directory</h1>

    <div className="student-list">
    {students.map((x) => (
      <div className="student-card" key={x.id}>
        <div className="card-header">
          <h2>{x.name}</h2>
          <span>{x.department}</span>
        </div>

        <div className="card-body">
          <p><strong>📧 Email:</strong> {x.email}</p>
          <p><strong>📱 Mobile:</strong> {x.mobile}</p>
          <p><strong>📚 Course:</strong> {x.course}</p>
        </div>

        <div className="card-buttons">
          <button
            className="edit-btn"
            onClick={() => handleUpdate(x.id)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => handleDelete(x.id)}
          >
             Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default ViewStudent