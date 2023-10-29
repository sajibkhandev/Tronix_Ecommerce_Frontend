import React from 'react'

const SubHeading = ({className,text}) => {
  return (
    <h3 className={`text-4xl text-secondary font-mon font-bold ${className}`}>{text}</h3>
  )
}

export default SubHeading