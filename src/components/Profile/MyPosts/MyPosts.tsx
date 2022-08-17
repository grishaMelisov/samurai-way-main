import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
        <Post message='Hello World' likeCount={2} />
        <Post message='IT-Kamasutra' likeCount={100} />
        <Post message='Do not stop coding' likeCount={0} />
        <Post message='Follow your heart' likeCount={10} />
      </div>
    </div>
  )
}

export default MyPosts
