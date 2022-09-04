import s from './MyPosts.module.css'
import Post from './Post/Post'

type PostsType = {
  postsData: Array<PostPropsType>
}

type PostPropsType = {
  text: string
  likes: number
  id: number
}

function MyPosts(props: PostsType) {
  let postsElements = props.postsData.map((el: PostPropsType) => (
    <Post message={el.text} likeCount={el.likes} id={el.id} />
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
