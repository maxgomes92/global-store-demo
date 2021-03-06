import React from 'react'

export default function Cards({
  children,
}) {
  return (
    <div className="card-wrapper">
      {children}
    </div>
  )
}
