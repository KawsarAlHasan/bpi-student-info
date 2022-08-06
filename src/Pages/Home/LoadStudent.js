import React, { useEffect, useState } from 'react'
import banner1 from '../../Images/banner1.jpg'
import UseStudent from '../Shared/UseStudent'
import './LoadStudent.css'
import { useNavigate } from 'react-router-dom'

const LoadStudent = (props) => {
  const [students, setStudents] = UseStudent([])

  const [value, setValue] = useState('')

  const navigate = useNavigate()

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
              <th>Edit</th>
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
                    <td>
                      <label
                        htmlFor="my-modal-6"
                        className="btn modal-button btn-xs btn-primary"
                      >
                        Edit
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal-6"
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Student Information Edit
                          </h3>
                          <p className="py-4">ohh no😒</p>
                          <p className="pb-4">Edit option comming soon🚀</p>
                          <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
          )}
        </table>
      </div>
    </div>
  )
}

export default LoadStudent
