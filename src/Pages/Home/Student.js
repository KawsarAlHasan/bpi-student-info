import React from 'react';
import { toast } from 'react-toastify';

const Student = ({ student }) => {
    const { _id, roll, fName, lName, url, address, technology, semester, shift, session, gender, phone, description } = student;


    return (
        <div className='shadow-lg rounded text-center pb-3'>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h1 className='	text-success'>Roll: {roll}</h1>
                    <h2 className="card-title">Name: {fName} {lName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">

                        <button className="btn btn-sm btn-warning">More Details</button>

                        <label htmlFor="my-modal-6" className="btn modal-button btn-sm btn-primary">Edit</label>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;