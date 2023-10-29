import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`text-white text-lg font-pop font-normal bg-third py-3 px-8 rounded-lg ${className}`}>{text}</button>
  )
}

export default Button