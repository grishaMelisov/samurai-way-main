import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
  name: string
  id: number
}

type MessagesPropsType = {
  id: number
  text: string
}

export function Dialogs(props: any) {
  let dialogsElements = props.state.dialogs.map((el: DialogsPropsType) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ))

  let messagesElement = props.state.messages.map((el: MessagesPropsType) => (
    <Message key={el.id} text={el.text} id={el.id} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  )
}
