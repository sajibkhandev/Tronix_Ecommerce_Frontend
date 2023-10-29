import React from 'react'

const List = ({className,text}) => {
  return (
    <li  className={`text-secondary text-lg font-pop font-normal list-none cursor-pointer ${className}`}>{text}</li>
  )
}

export default List