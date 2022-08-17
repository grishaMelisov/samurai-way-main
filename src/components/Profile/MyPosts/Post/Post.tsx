import React from 'react'
import s from './Post.module.css'

function Post() {
  return (
    <div className={s.item}>
      <img src='https://blogdota.ru/wp-content/uploads/bloodseeker-430-x-412.jpg' />
      post 1<button>Like</button>
      <button>Dislike</button>
    </div>
  )
}

export default Post
