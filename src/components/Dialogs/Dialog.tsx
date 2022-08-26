import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogPropsType = {
  name: string
  id: string
}

export function Dialog(props: DialogPropsType) {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  )
}
