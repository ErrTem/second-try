const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'yo' },
        { id: 2, message: 'yoyo' },
        { id: 3, message: 'listen' },
        { id: 4, message: 'sleep' },
    ],
    dialogs: [
        { id: 1, name: 'Dima', avatar: 'https://a.d-cd.net/1a424f2s-960.jpg' },
        { id: 2, name: 'Andrew', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg}' },
        { id: 3, name: 'Sasha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
        { id: 4, name: 'Alex', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            }; 
        default:
            return state
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer