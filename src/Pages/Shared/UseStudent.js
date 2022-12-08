import { useEffect, useState } from 'react'

const UseStudent = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('https://bpi-student-info.onrender.com/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      })
  }, [])
  return [students, setStudents]
}

export default UseStudent
