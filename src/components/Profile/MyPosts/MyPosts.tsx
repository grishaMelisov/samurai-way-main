import React from 'react';
import { ChangeEvent, useRef } from 'react';
import { validate } from 'uuid';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    postsData: Array<PostArrType>;
    addPost: (e: string) => void;
};
export type PostArrType = {
    text: string;
    likes: number;
    id: number;
};

function MyPosts(props: PostsType) {
    let postsElements = props.postsData.map((el: PostArrType) => <Post key={el.id} message={el.text} likeCount={el.likes} id={el.id} />);
    let textareaElem = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        let text = textareaElem.current!.value;
        props.addPost(text);
        textareaElem.current!.value = '';
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={textareaElem}
                        // value={textareaValue}
                        // onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        //     textareaValue = e.currentTarget.value;
                        // }}
                    ></textarea>
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
