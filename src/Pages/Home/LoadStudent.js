import React, { useEffect, useState } from 'react'
import banner1 from '../../Images/banner1.jpg'
import './LoadStudent.css'
import { useNavigate } from 'react-router-dom'

const LoadStudent = (props) => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(10)

  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(
      `https://stormy-sands-12716.herokuapp.com/students?page=${page}&size=${size}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      })
  }, [page, size])

  useEffect(() => {
    fetch(`https://stormy-sands-12716.herokuapp.com/studentsCount`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count
        const pages = Math.ceil(count / 10)
        setPageCount(pages)
      })
  }, [])

  const studentDetails = (id) => {
    navigate(`/student/${id}`)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="">
      <div
        className="hero h-screen-1/2"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 mt-32 text-3xl font-bold">
              Barguna Polytechnic Institute
            </h1>
            <p className="mb-5">
              Please search student Name or Roll or outher information
            </p>
            <div className="form-control mb-32">
              <form className="input-group" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Student Search…"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="input input-bordered input-info text-black w-full input-sm max-w-xl"
                />
                <button
                  type="submit"
                  className="btn btn-square input-info btn-sm max-w-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Technology</th>
              <th>Roll</th>
              <th>Details</th>
            </tr>
          </thead>
          {students.length === 0 ? (
            <tbody>
              <tr>
                <th className="text-3xl font-bold">No Student Found😒</th>
              </tr>
            </tbody>
          ) : (
            students
              .filter(
                (student) =>
                  student.fName.toLowerCase().includes(value) ||
                  student.lName.toLowerCase().includes(value) ||
                  student.roll.toLowerCase().includes(value) ||
                  student.technology.toLowerCase().includes(value) ||
                  student.semester.toLowerCase().includes(value),
              )
              .map((student) => (
                <tbody key={student._id}>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={student.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {student.fName + ' ' + student.lName}
                          </div>
                          <div className="text-sm opacity-60">
                            {student.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {student.technology}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {student.semester}
                      </span>
                    </td>
                    <td>{student.roll}</td>
                    <th>
                      <button
                        onClick={() => studentDetails(student._id)}
                        className="btn btn-xs btn-warning"
                      >
                        Details
                      </button>
                    </th>
                  </tr>
                </tbody>
              ))
          )}
        </table>
      </div>

      {/* pagination */}
      <div class="btn-group flex justify-center">
        <span className="font-bold">Page No: </span>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? 'btn btn-sm btn-active' : 'btn btn-sm'}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          onChange={(e) => setSize(e.target.value)}
          className="btn btn-sm"
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

export default LoadStudent
