import React from 'react'
import MyPosts, { PostArrType, PostsType } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  postsData: Array<PostArrType>
  addPost: (e: string) => void
}

function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} addPost={props.addPost} />
    </div>
  )
}

export default Profile
