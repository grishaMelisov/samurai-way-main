import { rerenderEntireTree } from './../render';

type PostsType = {
    id: number;
    text: string;
    likes: number;
};
type MessagesType = {
    id: number;
    text: string;
};
type DialogsType = {
    id: number;
    name: string;
};
type FriendsType = {
    id: number;
    name: string;
    avatar: string;
};
export type ProfilePageType = {
    posts: Array<PostsType>;
    newPostText: string;
};
type DialogsPageType = {
    messages: Array<MessagesType>;
    dialogs: Array<DialogsType>;
};
type SidebarPageType = {
    friends: Array<FriendsType>;
};
export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebarPage: SidebarPageType;
};

let state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, text: 'Hello World', likes: 2 },
            { id: 2, text: 'IT-Kamasutra', likes: 100 },
            { id: 3, text: 'Do not stop coding', likes: 0 },
            { id: 4, text: 'Follow your heart', likes: 10 },
        ],
        newPostText: 'amoCRM',
    },

    dialogsPage: {
        messages: [
            { id: 1, text: 'Yo' },
            { id: 2, text: 'Snow go down dude' },
            { id: 3, text: 'WC fucks' },
            { id: 4, text: 'devs are the best' },
            { id: 5, text: 'dunno what to say' },
        ],
        dialogs: [
            { id: 1, name: 'Cahrlie' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Masha' },
            { id: 5, name: 'Tonya' },
        ],
    },

    sidebarPage: {
        friends: [
            {
                id: 1,
                name: 'Sveta',
                avatar: 'https://picsum.photos/id/237/200/300',
            },
            {
                id: 2,
                name: 'Masha',
                avatar: 'https://picsum.photos/id/237/200/300',
            },
            {
                id: 3,
                name: 'Tonya',
                avatar: 'https://picsum.photos/id/237/200/300',
            },
        ],
    },
};

export let addPost = (postMessage: string) => {
    let newPost: PostsType = {
        id: state.profilePage.posts.length + 2,
        text: postMessage,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export default state;
