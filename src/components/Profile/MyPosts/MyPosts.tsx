import { useRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

export type PostsType = {
  postsData: Array<PostArrType>
  addPost: (e: string) => void
}
export type PostArrType = {
  text: string
  likes: number
  id: number
}

function MyPosts(props: PostsType) {
  let postsElements = props.postsData.map((el: PostArrType) => (
    <Post key={el.id} message={el.text} likeCount={el.likes} id={el.id} />
  ))

  const buttonHandler = () => {
    props.addPost('hello samurai')
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button onClick={buttonHandler}>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
