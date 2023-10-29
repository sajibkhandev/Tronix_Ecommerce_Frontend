import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className="mx-auto max-w-container">{children}</div>
  )
}

export default Container