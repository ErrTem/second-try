import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sitebarReducer from "./sitebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hola amigo', likesCount: 23 },
                { id: 2, message: 'Post 1', likesCount: 11 },
                { id: 3, message: 'sluhai' },
                { id: 4, message: 'test message' },
            ],
            newPostText: 'input',

        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'yo' },
                { id: 2, message: 'yoyo' },
                { id: 3, message: 'listen' },
                { id: 4, message: 'sleep' },
            ],
            dialogs: [
                { id: 1, name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' },
                { id: 2, name: 'Andrew', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg}' },
                { id: 3, name: 'Sasha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
                { id: 4, name: 'Alex', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' },
            ],
            newMessageBody: ''

        },
        sitebar: [
            { id: 1, name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' },
            { id: 2, name: 'Andrew', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg}' },
            { id: 3, name: 'Sasha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
        ],

    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //type ADD-POST

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state)


    }
}







window.state = store
export default store