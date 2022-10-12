import s from './MyPosts.module.css'
import Post from './Post/Post'

export type PostsType = {
  postsData: Array<PostArrType>
}

export type PostArrType = {
  text: string
  likes: number
  id: number
}

function MyPosts(props: PostsType) {
  console.log(props)
  let postsElements = props.postsData.map((el: PostArrType) => (
    <Post key={el.id} message={el.text} likeCount={el.likes} id={el.id} />
  ))
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
