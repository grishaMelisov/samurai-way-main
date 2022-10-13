import s from './Friends.module.css'

type PropsType = {
  state: Array<FriendsPropsType>
}

type FriendsPropsType = {
  name: string
  id: number
}

export function Friends(props: PropsType) {
  console.log('пропсы друзей' + props)

  return <div className={s.friends}>erreger</div>
}
