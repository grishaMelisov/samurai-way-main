import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}

export function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          className={s.infoPic}
          src='https://img.freepik.com/free-photo/zen-balancing-pebbles-misty-lake_53876-138198.jpg?w=1380&t=st=1665954555~exp=1665955155~hmac=0a710a7498f8c78b8c0808fb84f9f0c09912db59176c5e1c76c990aa319821e4'
        />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  )
}
