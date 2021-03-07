import React, { useRef } from 'react'
import VerticalSpace from './VerticalSpace'

export default function Form ({ onSuccess }) {
  const firstNameRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    onSuccess({
      firstName: firstNameRef.current.value,
    })
  }

  return (
    <>
      <h1>Fill in with some data</h1>
      <form onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="first-name">First name</label>
          <VerticalSpace height={5} />
          <input id="first-name" type="text" placeholder="Type in your first name" ref={firstNameRef} />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="last-name">Last name</label>
          <VerticalSpace height={5} />
          <input id="last-name" type="text" placeholder="Type in your last name" />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="age">Age</label>
          <VerticalSpace height={5} />
          <input id="age" type="number" placeholder="Type in your age" />
        </div>

        <VerticalSpace height={10} />

        <input type="submit" value="Save!" />
      </form>
    </>
  )
}
