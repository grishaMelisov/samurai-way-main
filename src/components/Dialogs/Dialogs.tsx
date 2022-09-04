import { NavLink } from 'react-router-dom'
import { Dialog } from './Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message'

type DialogsPropsType = {
  name: string
  id: number
}

export function Dialogs() {
  const dialogs: Array<DialogsPropsType> = [
    { id: 1, name: 'Cahrlie' },
    { id: 2, name: 'Dimych' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Masha' },
    { id: 5, name: 'Tonya' },
  ]

  const messages = [
    { id: 1, text: 'Yo' },
    { id: 2, text: 'Snow go down dude' },
    { id: 3, text: 'WC fucks' },
    { id: 4, text: 'devs are the best' },
    { id: 5, text: 'dunno what to say' },
  ]

  let dialogsElements = dialogs.map((el) => <Dialog name={el.name} id={el.id} />)

  let messagesElement = messages.map((el) => <Message text={el.text} id={el.id} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        Dialogs:
        {dialogsElements}
      </div>
      <div className={s.messages}>
        Messages:
        {messagesElement}
      </div>
    </div>
  )
}
