import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import emailLogo from '../../Images/email.png'

function MenuIcon() {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_p1v12ya',
        'template_wipafiv',
        e.target,
        'Kf9t6D5m9U8K-RG8x',
      )
      .then(
        (result) => {
          toast('Success your Message!')
          window.location.reload(false)
        },
        (error) => {
          toast.error('Oh no! not success your message')
          window.location.reload(false)
        },
      )
  }

  // import JoditEditor from 'jodit-react'
  // const editor = useRef(null)
  // const [content, setContent] = useState('')
  // <JoditEditor
  //  ref={editor}
  //  value={content}
  //  onChange={(newContent) => setContent(newContent)}
  // />
  // {content}

  return (
    <div className="relative">
      <ul class="menu rounded-box bg-slate-300 z-50 fixed top-[40%] right-0">
        <li>
          <label for="my-modal-7">
            <img src={emailLogo} className="h-5 w-5" />
          </label>
        </li>

        <input type="checkbox" id="my-modal-7" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="my-modal-7"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <h3 className="font-bold text-lg text-center">
              Comments, Suggestions, and Complaints
            </h3>
            <div className="text-center container w-50 my-3">
              <form onSubmit={sendEmail}>
                <label class="label">
                  <span class="label-text font-bold">Your Name:</span>
                </label>
                <input
                  type="text"
                  name="eName"
                  className="input input-bordered input-info w-full input-sm max-w-xl mb-1 mt-[-10px]"
                  placeholder="Your Name"
                  required
                />
                <br />
                <label class="label">
                  <span class="label-text font-bold">Your Email:</span>
                </label>
                <input
                  type="email"
                  name="eEmail"
                  placeholder="Your Email"
                  class="input input-bordered input-info w-full input-sm max-w-xl mb-1 mt-[-7px]"
                  required
                />
                <br />
                <label class="label">
                  <span class="label-text font-bold">Your Phone Number:</span>
                </label>
                <input
                  className="input input-bordered input-info w-full input-sm max-w-xl mb-1 mt-[-7px]"
                  placeholder="Your Phone Number"
                  type="number"
                  name="ePhone"
                  required
                />
                <br />
                <label class="label">
                  <span class="label-text font-bold">Your Text:</span>
                </label>
                <textarea
                  className="textarea textarea-info w-full input-sm max-w-xl mb-1 mt-[-7px]"
                  placeholder="Start writing..."
                  name="message"
                  required
                />
                <input
                  type="submit"
                  className="btn btn-info w-full input-sm max-w-xl"
                  value="Please Submit"
                />
              </form>
            </div>
          </div>
        </div>

        <li>
          <label class="swap swap-rotate" data-act-class="ACTIVECLASS">
            <input type="checkbox" data-toggle-theme="dark,light" />

            <svg
              class="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              class="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuIcon
