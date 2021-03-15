import React from 'react'
import VerticalSpace from './VerticalSpace'

export default function Profile () {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img src="empty-user-profile.png" alt="User profile" />
      </div>

      <VerticalSpace height={15} />

      <div className="profile-data">
        <div className="profile-data-item">
          <h3>First name:</h3>
          <p>...</p>
        </div>

        <VerticalSpace height={15} />

        <div className="profile-data-item">
          <h3>Last name:</h3>
          <p>...</p>
        </div>

        <VerticalSpace height={15} />

        <div className="profile-data-item">
          <h3>Age:</h3>
          <p>...</p>
        </div>
      </div>
    </div>
  )
}
