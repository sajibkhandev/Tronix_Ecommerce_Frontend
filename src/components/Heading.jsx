import React from 'react'

const Heading = ({className,text}) => {
  return (
    <h2 className={`text-5xl text-secondary font-mon font-bold ${className}`}>{text}</h2>
  )
}

export default Heading