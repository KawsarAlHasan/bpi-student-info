import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import camera from '../../Images/camera.png'

const StudentDetails = (props) => {
  const { studentId } = useParams()

  const [user] = useAuthState(auth)

  const navigate = useNavigate()

  const [studentDetails, setStudentDetails] = useState({})

  useEffect(() => {
    const url = `https://bpi-student-info.onrender.com/student/${studentId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudentDetails(data))
  }, [])

  // user information update
  const handleUpdateStudent = (event) => {
    event.preventDefault()
    const fName = event.target.fName.value
    const lName = event.target.lName.value
    const address = event.target.address.value
    const semester = event.target.semester.value
    const phone = event.target.phone.value
    const description = event.target.description.value

    const updateStudent = {
      fName,
      lName,
      address,
      semester,
      phone,
      description,
    }
    // send data to the server
    const urlLink = `https://bpi-student-info.onrender.com/student/${studentId}`
    fetch(urlLink, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('success', data)
        window.location.reload(false)
        toast('Student Infomation Updated Successfully!')
      })
  }

  // User delete
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?')
    if (proceed) {
      const url = `https://bpi-student-info.onrender.com/student/${id}`
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

  // updateStudent Image
  const imagesStorageKey = 'e4c1cccd67b05eba41a239e62a0246fc'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const imagesSubmit = async (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?&key=${imagesStorageKey}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url
          const student = {
            img: img,
          }
          fetch(`https://bpi-student-info.onrender.com/user/${studentId}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(student),
          })
            .then((res) => res.json())
            .then((output) => {
              console.log(output)
              window.location.reload(false)
              toast('Student Image change Successfully!')
            })
        }
        console.log('imgbb', result)
      })
  }

  return (
    <div className="bg-base-200">
      <div className="hero min-h-[77vh] ">
        <div className="hero-content flex-col lg:flex-row">
          <div class="indicator">
            {user.email === studentDetails.email ? (
              <>
                <label
                  for="my-modal-3"
                  class="cursor-pointer modal-button indicator-item indicator-bottom"
                >
                  <img src={camera} class=" w-[30px] h-[30px]" alt="no image" />
                </label>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box relative">
                    <label
                      for="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 class="text-lg font-bold">Student Image Change</h3>
                    {/* Student Image Change */}
                    <form
                      className="d-flex flex-column"
                      onSubmit={handleSubmit(imagesSubmit)}
                    >
                      <input
                        type="file"
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        {...register('image')}
                      />

                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}

                      <input
                        className="btn btn-info w-full input-sm max-w-xl"
                        value="Change Student Image"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}

            <img
              src={studentDetails.img}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              {studentDetails.fName + ' ' + studentDetails.lName}
            </h1>
            <p className="pt-6">
              <span className="font-bold">Technology: </span>
              {studentDetails.technology}
              <span className="font-bold pl-6">Roll: </span>
              {studentDetails.roll}
            </p>
            <p className="pt-6">
              <span className="font-bold">Semester: </span>
              {studentDetails.semester}
              <span className="font-bold pl-6">Shift: </span>
              {studentDetails.shift}
            </p>
            <p className="pt-6">
              <span className="font-bold">Session: </span>
              {studentDetails.session || 'No session entry'}
            </p>
            <p className="pt-6">
              <span className="font-bold">Address: </span>
              {studentDetails.address}
            </p>
            <p className="pt-6">
              <span className="font-bold">Gender: </span>
              {studentDetails.gender}
            </p>
            <p className="pt-6">
              <span className="font-bold">Phone: </span>
              {studentDetails.phone || 'No Phone Number entry'}
            </p>
            <p className="pt-6">
              <span className="font-bold">About: </span>
              {studentDetails.description || 'No About entry'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around py-3">
        <div>
          {user.email === studentDetails.email ? (
            <>
              <label
                for="my-modal-6"
                className="btn modal-button btn-sm md:btn-md lg:btn-wide btn-primary"
              >
                Information Edit
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                  <label
                    for="my-modal-6"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold text-lg text-center">
                    Student Information Edit
                  </h3>
                  <div className="text-center container w-50 my-3">
                    {/* update student info */}
                    <form onSubmit={handleUpdateStudent}>
                      <input
                        type="text"
                        name="fName"
                        defaultValue={studentDetails.fName}
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        placeholder="First Name"
                        required
                      />
                      <br />
                      <input
                        type="text"
                        defaultValue={studentDetails.lName}
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        name="lName"
                        placeholder="Last Name"
                        required
                      />
                      <br />
                      <input
                        type="text"
                        defaultValue={studentDetails.address}
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        name="address"
                        placeholder="Permanent address (only upazila and zilla)"
                        required
                      />
                      <br />
                      <select
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        name="semester"
                        required
                      >
                        <option value="1st">1st Semester</option>
                        <option value="2nd">2nd Semester</option>
                        <option value="3rd">3rd Semester</option>
                        <option value="4th">4th Semester</option>
                        <option value="5th">5th Semester</option>
                        <option value="6th">6th Semester</option>
                        <option value="7th">7th Semester</option>
                        <option value="8th">8th Semester</option>
                        <option value="8th">All Complete</option>
                      </select>
                      <br />
                      <input
                        defaultValue={studentDetails.phone}
                        className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
                        placeholder="Your Phone Number (optional)"
                        type="number"
                        name="phone"
                      />
                      <br />
                      <textarea
                        defaultValue={studentDetails.description}
                        className="textarea textarea-info w-full input-sm max-w-xl mb-1"
                        placeholder="About your self (optional)"
                        name="description"
                      />
                      <input
                        type="submit"
                        className="btn btn-info w-full input-sm max-w-xl"
                        value="Update Student Info"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div>
          {user.email === studentDetails.email ? (
            <button
              className="btn btn-error btn-sm md:btn-md lg:btn-wide"
              onClick={() => handleDelete(studentDetails._id)}
            >
              Student Delete
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
