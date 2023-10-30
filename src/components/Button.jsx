import React from 'react'

const Button = ({className,text,type}) => {
  return (
    <button type={type} className={`text-white text-lg font-pop font-normal bg-third py-3 px-8 rounded-lg hover:bg-transparent border border-solid border-third hover:text-third duration-500 ${className}`}>{text}</button>
  )
}

export default Button