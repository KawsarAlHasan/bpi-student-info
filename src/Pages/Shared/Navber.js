import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import logo from '../../Images/logo.png'

const Navber = (props) => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }
  const menuItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/addStudent">ADD STUDENT</Link>
      </li>
      <li>
        <Link to="/principal">PRINCIPAL</Link>
      </li>
      <li>
        <Link to="/teachers">TEACHERS</Link>
      </li>
      <li>
        <Link to="/notice">NOTICE</Link>
      </li>

      {user ? (
        <li>
          <Link onClick={handleSignOut} to="/login">
            SIGN OUT
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </>
      )}
    </>
  )
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img src={logo} alt="No Internet" />
            </div>
          </div>
          <span className="pl-1">BPI</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  )
}

export default Navber
