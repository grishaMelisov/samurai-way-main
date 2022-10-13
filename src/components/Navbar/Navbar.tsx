import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

function Navbar(props: any) {
  let friends = props.state.friends.map((el: any) => (
    <div key={el.id} className={s.friendItem}>
      <img className={s.avatar} src={el.avatar} alt='' />
      {el.name}
    </div>
  ))
  console.log('друзья в баре ' + props.state.friends[0].name)
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={`${s.item}`}>
        <NavLink to='/news' activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.active}>
          Friends
        </NavLink>
      </div>
      <div className={s.friends}>{friends}</div>
    </nav>
  )
}

export default Navbar
