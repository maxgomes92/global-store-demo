import React, { useRef } from 'react'
import VerticalSpace from './VerticalSpace'
import { useApp } from './store'

export default function Form () {
  const { actions: { setUserData } } = useApp()
  const formRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const ageRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    setUserData({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
    })

    formRef.current.reset()
  }

  return (
    <>
      <h1>Fill in with some data</h1>
      <form onSubmit={onSubmit} ref={formRef}>
        <div className="form-item">
          <label htmlFor="first-name">First name</label>
          <VerticalSpace height={5} />
          <input id="first-name" type="text" placeholder="Type in your first name" ref={firstNameRef} />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="last-name">Last name</label>
          <VerticalSpace height={5} />
          <input id="last-name" type="text" placeholder="Type in your last name" ref={lastNameRef} />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="age">Age</label>
          <VerticalSpace height={5} />
          <input id="age" type="number" placeholder="Type in your age" ref={ageRef} />
        </div>

        <VerticalSpace height={10} />

        <input type="submit" value="Save!" />
      </form>
    </>
  )
}
