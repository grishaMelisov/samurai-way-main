import state, { subscribe } from './redux/state';

import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, RootStateType, updateNewPostText } from './redux/state';
import './index.css';

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);
