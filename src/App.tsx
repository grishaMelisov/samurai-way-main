import { Route } from 'react-router-dom'
import './App.css'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Friends } from './components/Friends/Friends'
import Header from './components/Header/Header'
import { Music } from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import { News } from './components/News/News'
import Profile from './components/Profile/Profile'
import { Settings } from './components/Settings/Settings'

function App(props: any) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebarPage} />
      {/* <Friends state={props.state.sidebarPage.friends} /> */}
      <div className='app-wrapper-content'>
        <Route
          path='/profile'
          render={() => <Profile postsData={props.state.profilePage.posts} />}
        />
        <Route
          path='/dialogs'
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/Settings' component={Settings} />
        <Route
          path='/friends'
          render={() => <Friends state={props.state.sidebarPage.friends} />}
        />
      </div>
    </div>
  )
}

export default App
