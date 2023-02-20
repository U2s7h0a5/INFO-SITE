import React from 'react'
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='main'>
        <h1 className='main-title'> Fun Facts about React </h1>
        <ul>
            <li> It was Released in 2013</li>
            <li>Was Originally created by Jordan Walke</li>
            <li>Has well Over 100K stars on GitHub</li>
            <li> Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
  )
}

export default MainContent