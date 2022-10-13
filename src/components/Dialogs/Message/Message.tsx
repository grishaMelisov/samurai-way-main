import s from '.././Dialogs.module.css'
type MessagePropsType = {
  text: string
  id: number
}

export function Message(props: MessagePropsType) {
  let style = props.id % 2 === 0 ? s.messageEven : s.message

  return <div className={style}>{props.text}</div>
}
