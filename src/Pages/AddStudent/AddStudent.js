import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const AddStudent = ({ date }) => {
  const [user] = useAuthState(auth)

  const imageStorageKey = 'e4c1cccd67b05eba41a239e62a0246fc'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url
          const student = {
            roll: data.roll,
            fName: data.fName,
            lName: data.lName,
            address: data.address,
            technology: data.technology,
            semester: data.semester,
            shift: data.shift,
            session: data.session,
            phone: data.phone,
            email: data.email,
            description: data.description,
            gender: data.gender,
            img: img,
          }
          fetch(`https://stormy-sands-12716.herokuapp.com/addStudent`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(student),
          })
            .then((res) => res.json())
            .then((output) => {
              console.log(output)
              window.location.reload(false)
              toast('Student Added Successfully!')
            })
        }
        console.log('imgbb', result)
      })
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        Please Add Your Student Information💻
      </h1>
      <div className="text-center container w-50 my-3">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            placeholder="Your Roll"
            type="number"
            {...register('roll', { required: true })}
          />{' '}
          <br />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xs mb-1"
            placeholder="Your First Name"
            {...register('fName', { required: true })}
          />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xs mb-1"
            placeholder="Your Last Name"
            {...register('lName')}
          />{' '}
          <br />
          <input
            type="file"
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            {...register('image')}
          />{' '}
          <br />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            placeholder="Permanent address (only upazila and zilla)"
            {...register('address', { required: true })}
          />{' '}
          <br />
          <select
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            {...register('technology', { required: true })}
          >
            <option value="Computer">Computer Technology</option>
            <option value="Electronics">Electronics Technology</option>
            <option value="Civil">Civil Technology</option>
            <option value="Environment">Environment Technology</option>
            <option value="RAC">RAC Technology</option>
          </select>{' '}
          <br />
          <select
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            {...register('semester', { required: true })}
          >
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
            <option value="3rd">3rd Semester</option>
            <option value="4th">4th Semester</option>
            <option value="5th">5th Semester</option>
            <option value="6th">6th Semester</option>
            <option value="7th">7th Semester</option>
            <option value="8th">8th Semester</option>
          </select>{' '}
          <br />
          <select
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            {...register('shift', { required: true })}
          >
            <option value="1st">1st Shift</option>
            <option value="2nd">2nd Shift</option>
          </select>{' '}
          <br />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xl mb-1"
            placeholder="Session (19-20)"
            {...register('session')}
          />{' '}
          <br />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xs mb-1"
            placeholder="Your Phone Number (optional)"
            type="number"
            {...register('phone')}
          />
          <input
            className="input input-bordered input-info w-full input-sm max-w-xs mb-1"
            defaultValue={user.email}
            {...register('email')}
          />{' '}
          <br />
          <textarea
            className="textarea textarea-info w-full input-sm max-w-xl mb-1"
            placeholder="About your self (optional)"
            {...register('description')}
          />{' '}
          <br />
          <div className="form-control">
            <span className="text-lg">GENDER </span>
            <span className="text-md">
              MALE:{' '}
              <input
                {...register('gender', { required: true })}
                className="radio radio-xs radio-primary"
                type="radio"
                value="Male"
              />{' '}
            </span>
            <span>
              FEMALE:{' '}
              <input
                {...register('gender', { required: true })}
                className="radio radio-xs radio-primary"
                type="radio"
                value="Female"
              />{' '}
            </span>
            <span>
              CUSTOM:{' '}
              <input
                {...register('gender', { required: true })}
                className="radio radio-xs radio-primary"
                type="radio"
                value="Custom"
              />
            </span>
            <br />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="btn btn-info w-full input-sm max-w-xl"
            value="Add Student Info"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default AddStudent
