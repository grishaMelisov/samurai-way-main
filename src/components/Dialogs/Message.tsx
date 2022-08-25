import s from './Dialogs.module.css'
type MessagePropsType = {
  text: string
}

export function Message(props: MessagePropsType) {
  return <div className={s.message}>{props.text}</div>
}
