import { NavLink } from 'react-router-dom'
import { Dialog } from './Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message'

type DialogsPropsType = {
  name: string
  id: number
}

export function Dialogs() {
  const dialogsData: Array<DialogsPropsType> = [
    { id: 1, name: 'Cahrlie' },
    { id: 2, name: 'Dimych' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Masha' },
    { id: 5, name: 'Tonya' },
  ]

  const messagesData = [
    { id: 1, text: 'Yo' },
    { id: 2, text: 'Snow go down dude' },
    { id: 3, text: 'WC fucks' },
    { id: 4, text: 'devs are the best' },
    { id: 5, text: 'dunno what to say' },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        Dialogs:
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        Messages:
        <Message text={messagesData[0].text} id={messagesData[0].id} />
        <Message text={messagesData[1].text} id={messagesData[1].id} />
        <Message text={messagesData[2].text} id={messagesData[2].id} />
        <Message text={messagesData[3].text} id={messagesData[3].id} />
        <Message text={messagesData[4].text} id={messagesData[4].id} />
      </div>
    </div>
  )
}
