type PostsType = {
  id: number
  text: string
  likes: number
}
type MessagesType = {
  id: number
  text: string
}
type DialogsType = {
  id: number
  name: string
}
type FriendsType = {
  id: number
  name: string
  avatar: string
}
type ProfilePageType = {
  posts: Array<PostsType>
}
type DialogsPageType = {
  messages: Array<MessagesType>
  dialogs: Array<DialogsType>
}
type SidebarPageType = {
  friends: Array<FriendsType>
}
type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebarPage: SidebarPageType
}

let state: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hello World', likes: 2 },
      { id: 2, text: 'IT-Kamasutra', likes: 100 },
      { id: 3, text: 'Do not stop coding', likes: 0 },
      { id: 4, text: 'Follow your heart', likes: 10 },
    ],
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
        avatar:
          'https://img.photolamus.com/8EISH12c/x660/8383220f5e92cc0f6db2b2582b5f40b7/цифровой-мультяшный-аватар-нарисованный-вручную-в-цветном-стиле-с-вашей-фотографии.jpg',
      },
      {
        id: 2,
        name: 'Masha',
        avatar:
          'https://img.photolamus.com/8EISH12c/x660/8383220f5e92cc0f6db2b2582b5f40b7/цифровой-мультяшный-аватар-нарисованный-вручную-в-цветном-стиле-с-вашей-фотографии.jpg',
      },
      {
        id: 3,
        name: 'Tonya',
        avatar:
          'https://img.photolamus.com/8EISH12c/x660/8383220f5e92cc0f6db2b2582b5f40b7/цифровой-мультяшный-аватар-нарисованный-вручную-в-цветном-стиле-с-вашей-фотографии.jpg',
      },
    ],
  },
}

export default state
