import React from 'react';
import { ChangeEvent, useRef } from 'react';
import { validate } from 'uuid';
import { ProfilePageType } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    profilePage: ProfilePageType;
    addPost: (e: string) => void;
    updateNewPostText: (text: string) => void;
};
export type PostArrType = {
    text: string;
    likes: number;
    id: number;
};

function MyPosts(props: PostsType) {
    let postsElements = props.profilePage.posts.map((el: PostArrType) => <Post key={el.id} message={el.text} likeCount={el.likes} id={el.id} />);
    let textareaElem = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        let text = textareaElem.current!.value;
        props.addPost(text);
    };
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={textareaElem} value={props.profilePage.newPostText} onChange={onChangePost} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>new post</div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
