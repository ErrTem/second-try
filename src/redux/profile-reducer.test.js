import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('new post should be added', () => {
    let action = addPostActionCreator('testim bagi')

    let state = {
        posts: [
            { id: 1, message: 'Hola amigo', likesCount: 23 },
            { id: 2, message: 'Post 1', likesCount: 11 },
            { id: 3, message: 'sluhai' },
            { id: 4, message: 'test message' },
        ]
    }

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5) 
    
});

