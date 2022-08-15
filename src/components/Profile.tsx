import React from 'react'
import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src='https://picsum.photos/id/1047/1200/300' />
      </div>
      <div>avatar + description</div>
      <div>My posts</div>

      <div>new post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  )
}

export default Profile
