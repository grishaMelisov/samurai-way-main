import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

function MyPosts() {
  const posts = [
    { id: 1, text: 'Hello World', likes: 2 },
    { id: 2, text: 'IT-Kamasutra', likes: 100 },
    { id: 3, text: 'Do not stop coding', likes: 0 },
    { id: 4, text: 'Follow your heart', likes: 10 },
  ]

  let postsElements = posts.map((el) => <Post message={el.text} likeCount={el.likes} id={el.id} />)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
