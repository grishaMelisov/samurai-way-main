import React from 'react'
import s from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='#'>Profile</a>
      </div>
      <div className={s.item}>
        <a href='#'>Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='#'>News</a>
      </div>
      <div className={s.item}>
        <a href='#'>Music</a>
      </div>
    </nav>
  )
}

export default Navbar