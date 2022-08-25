import { NavLink } from 'react-router-dom'
import { Dialog } from './Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message'

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        Dialogs:
        <Dialog name='redrum' url='/dialogs/1' />
        <Dialog name='Dimich' url='/dialogs/2' />
        <Dialog name='Sveta' url='/dialogs/3' />
      </div>
      <div className={s.messages}>
        Messages:
        <Message text='Yo' />
        <Message text='Snow go down dude' />
        <Message text='sup dude?' />
      </div>
    </div>
  )
}
