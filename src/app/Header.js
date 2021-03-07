import React from 'react'

export default function Header({
  firstName,
}) {
  return (
    <header>
      {firstName ? `Welcome, ${firstName}!` : 'Welcome!'}
    </header>
  )
}
