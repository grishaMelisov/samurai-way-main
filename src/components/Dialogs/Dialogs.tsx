import { NavLink } from 'react-router-dom'
import { Dialog } from './Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message'

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        Dialogs:
        <Dialog name='Charlie' id='1' />
        <Dialog name='Dimich' id='2' />
        <Dialog name='Sveta' id='3' />
        <Dialog name='Masha' id='4' />
        <Dialog name='Tonya' id='5' />
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
