import React from 'react'
import UseStudent from '../Shared/UseStudent'

function TotalStudent() {
  const [students] = UseStudent([])
  const length = students.length + 250
  return (
    <div className="flex justify-center my-[20px] ">
      <div class="stats shadow bg-base-200">
        <div class="stat place-items-center">
          <div class="stat-title">Total Teachers</div>
          <div class="stat-value">60</div>
          <div class="stat-desc">Geast Teachers 20</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Total Users</div>
          <div class="stat-value text-secondary">{length}</div>
          <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Total Students</div>
          <div class="stat-value">2,000</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}

export default TotalStudent
