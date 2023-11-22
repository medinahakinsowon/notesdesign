import React from 'react';
import BookIcon from '../images/notes.ico'

const Header = () => {
  return (
    <div className='app-header'>
      <h1>Note App</h1>
      <img src={BookIcon} style={{width:'80px', height: '70px'}}/>
    </div>
    
  )
}

export default Header;
