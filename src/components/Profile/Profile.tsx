import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src='https://picsum.photos/id/1047/1200/300' />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
