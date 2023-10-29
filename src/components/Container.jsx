import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className="mx-auto max-w-container bg-red-500">{children}</div>
  )
}

export default Container