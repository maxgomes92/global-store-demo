import React from 'react'
import { useApp } from './store'
import VerticalSpace from './VerticalSpace'

export default function Profile () {
  const { state: { user } } = useApp()
  const { firstName, lastName, age } = user

  return (
    <div className="profile">
      <div className="profile-picture">
        <img src="empty-user-profile.png" alt="User profile" />
      </div>

      <VerticalSpace height={15} />

      <div className="profile-data">
        <div className="profile-data-item">
          <h3>Fist name:</h3>
          <p>{firstName || '-'}</p>
        </div>

        <VerticalSpace height={15} />

        <div className="profile-data-item">
          <h3>Last name:</h3>
          <p>{lastName|| '-'}</p>
        </div>

        <VerticalSpace height={15} />

        <div className="profile-data-item">
          <h3>Age:</h3>
          <p>{age|| '-'}</p>
        </div>
      </div>
    </div>
  )
}
