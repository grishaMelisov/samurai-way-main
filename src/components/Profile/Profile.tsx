import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const posts = [
  { id: 1, text: 'Hello World', likes: 2 },
  { id: 2, text: 'IT-Kamasutra', likes: 100 },
  { id: 3, text: 'Do not stop coding', likes: 0 },
  { id: 4, text: 'Follow your heart', likes: 10 },
]

function Profile(props: any) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={posts} />
    </div>
  )
}

export default Profile
