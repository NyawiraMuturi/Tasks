import React from 'react'
import Button from './Button'

const Header = () => {

  const addItem = () => {
    console.log("Clicked")
  }

  return (
    <div className='flex flex-row justify-between'>
        <header>
          <h1>Task Tracker</h1>
        </header>
        <Button text='Add' color='green' onClick={addItem}/>
    </div>

  )
}

export default Header