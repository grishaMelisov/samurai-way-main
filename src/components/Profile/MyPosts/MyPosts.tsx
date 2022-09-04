import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

function MyPosts() {
  const postsData = [
    { id: 1, text: 'Hello World', likes: 2 },
    { id: 2, text: 'IT-Kamasutra', likes: 100 },
    { id: 3, text: 'Do not stop coding', likes: 0 },
    { id: 4, text: 'Follow your heart', likes: 10 },
  ]
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
      <div className={s.posts}>
        <Post message={postsData[0].text} likeCount={postsData[0].likes} id={postsData[0].id} />
        <Post message={postsData[1].text} likeCount={postsData[1].likes} id={postsData[1].id} />
        <Post message={postsData[2].text} likeCount={postsData[2].likes} id={postsData[2].id} />
        <Post message={postsData[3].text} likeCount={postsData[3].likes} id={postsData[3].id} />
      </div>
    </div>
  )
}

export default MyPosts
