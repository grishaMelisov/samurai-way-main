import React from 'react';
import { ProfilePageType } from '../../redux/state';
import MyPosts, { PostArrType, PostsType } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    profilePage: ProfilePageType;
    addPost: (e: string) => void;
    updateNewPostText: (text: string) => void;
};

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;
