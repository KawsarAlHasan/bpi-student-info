import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const StudentDetails = (props) => {
  const navigate = useNavigate()

  const { studentId } = useParams()

  const [studentDetails, setStudentDetails] = useState({})

  useEffect(() => {
    const url = `https://stormy-sands-12716.herokuapp.com/student/${studentId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudentDetails(data))
  }, [])

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?')
    if (proceed) {
      const url = `https://stormy-sands-12716.herokuapp.com/student/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload(false)
          toast('Parts Item Delete Successfully!')
          navigate('/')
        })
    }
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={studentDetails.img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              {studentDetails.fName + ' ' + studentDetails.lName}
            </h1>
            <p className="pt-6">
              <span className="font-bold">Technology:</span>{' '}
              {studentDetails.technology}{' '}
              <span className="font-bold pl-6">Roll:</span>{' '}
              {studentDetails.roll}
            </p>
            <p className="pt-6">
              <span className="font-bold">Semester:</span>{' '}
              {studentDetails.semester}{' '}
              <span className="font-bold pl-6">Shift:</span>{' '}
              {studentDetails.shift}
            </p>
            <p className="pt-6">
              <span className="font-bold">Session:</span>{' '}
              {studentDetails.session || 'No session entry'}
            </p>
            <p className="pt-6">
              <span className="font-bold">Address:</span>{' '}
              {studentDetails.address}
            </p>
            <p className="pt-6">
              <span className="font-bold">Gender:</span> {studentDetails.gender}
            </p>
            <p className="pt-6">
              <span className="font-bold">Phone:</span>{' '}
              {studentDetails.phone || 'No Phone Number entry'}
            </p>
            <p className="pt-6">
              <span className="font-bold">About:</span>{' '}
              {studentDetails.description || 'No About entry'}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 grid justify-items-center">
        <button
          className="btn btn-error btn-wide"
          onClick={() => handleDelete(studentDetails._id)}
        >
          Student Delete
        </button>
      </div>
    </div>
  )
}

export default StudentDetails
