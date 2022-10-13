import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

type DialogPropsType = {
  name: string
  id: number
}

export function DialogItem(props: DialogPropsType) {
  return (
    <div className={s.dialog}>
      <img src='https://blogdota.ru/wp-content/uploads/bloodseeker-430-x-412.jpg' />

      <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  )
}
