import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
  message: string
  likeCount: number
}

function Post(props: PostPropsType) {
  return (
    <div className={s.item}>
      <img src='https://blogdota.ru/wp-content/uploads/bloodseeker-430-x-412.jpg' />
      {props.message}
      <div>
        <button>Like</button>
        {props.likeCount}
        <button>Dislike</button>
      </div>
    </div>
  )
}

export default Post
