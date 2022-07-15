import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddStudent = ({ date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/addStudent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload(false);
                toast('Student Added Successfully!');
            })
    };

    return (
        <div>
            <div className='text-center container w-50 my-3'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='input input-bordered input-info w-full input-sm max-w-xl mb-1' placeholder='Your Roll' type="number" {...register("roll", { required: true })} /> <br />
                    <input className='input input-bordered input-info w-full input-sm max-w-xs mb-1' placeholder='Your First Name' {...register("fName", { required: true })} />
                    <input className='input input-bordered input-info w-full input-sm max-w-xs mb-1' placeholder='Your Last Name' {...register("lName")} /> <br />
                    <input className='input input-bordered input-info w-full input-sm max-w-xl mb-1' placeholder='Your image url' {...register("url")} /> <br />
                    <input className='input input-bordered input-info w-full input-sm max-w-xl mb-1' placeholder='Permanent address (only upazila and zilla)' {...register("address", { required: true })} /> <br />
                    <select className='input input-bordered input-info w-full input-sm max-w-xl mb-1' {...register("technology", { required: true })}>
                        <option value="Computer">Computer Technology</option>
                        <option value="Electronics">Electronics Technology</option>
                        <option value="Civil">Civil Technology</option>
                        <option value="Environment">Environment Technology</option>
                        <option value="RAC">RAC Technology</option>
                    </select> <br />
                    <select className='input input-bordered input-info w-full input-sm max-w-xl mb-1' {...register("semester", { required: true })}>
                        <option value="1st">1st Semester</option>
                        <option value="2nd">2nd Semester</option>
                        <option value="3rd">3rd Semester</option>
                        <option value="4th">4th Semester</option>
                        <option value="5th">5th Semester</option>
                        <option value="6th">6th Semester</option>
                        <option value="7th">7th Semester</option>
                        <option value="8th">8th Semester</option>
                    </select> <br />
                    <select className='input input-bordered input-info w-full input-sm max-w-xl mb-1' {...register("shift", { required: true })}>
                        <option value="1st">1st Shift</option>
                        <option value="2nd">2nd Shift</option>
                    </select> <br />
                    <input className='input input-bordered input-info w-full input-sm max-w-xl mb-1' placeholder='Session' {...register("session")} /> <br />
                    <input className='input input-bordered input-info w-full input-sm max-w-xl mb-1' placeholder='Your Phone Number (optional)' type="number" {...register("phone")} /> <br />
                    <textarea className='textarea textarea-info w-full input-sm max-w-xl mb-1' placeholder='About your self (optional)' {...register("description")} /> <br />



                    <div className="form-control">
                        <span className='text-lg'>GENDER </span>
                        <span className='text-md'>MALE: <input {...register("gender", { required: true })} className="radio radio-xs radio-primary" type="radio" value="Male" /> </span>
                        <span>FEMALE: <input {...register("gender", { required: true })} className="radio radio-xs radio-primary" type="radio" value="Female" /> </span>
                        <span>CUSTOM: <input {...register("gender", { required: true })} className="radio radio-xs radio-primary" type="radio" value="Custom" /></span><br />
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-info w-full input-sm max-w-xl' value="Add Student Info" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
