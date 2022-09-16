import React from 'react'

const Button = ({text, color, onClick}) => {
  return (
    <div>
      <button 
      className='py-1 px-4 text-white rounded-md'
      onClick={onClick}
      style={{backgroundColor:color}}>{text}</button>
    </div>
  )
}

export default Button