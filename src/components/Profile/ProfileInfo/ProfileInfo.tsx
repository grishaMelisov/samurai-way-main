import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}

export function ProfileInfo() {
  return (
    <div>
      <div>
        <img src='https://picsum.photos/id/1047/1200/300' />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  )
}
