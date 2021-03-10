import React from 'react'
import { useApp } from './store'

export default function Header() {
  const { state: { user } } = useApp()

  return (
    <header>
      {user.firstName ? `Welcome, ${user.firstName}!` : 'Welcome!'}
    </header>
  )
}
