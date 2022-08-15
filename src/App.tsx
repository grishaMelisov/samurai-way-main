import React from 'react'
import './App.css'

function App() {
  console.log('App rendering')
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://picsum.photos/id/1011/70/70' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://picsum.photos/id/1047/1200/100' />
        </div>
        <div>avatar + description</div>
        <div>
          My posts
          <div>new post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default App
