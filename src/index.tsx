import state from './redux/state'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App state={state} />, document.getElementById('root'))
