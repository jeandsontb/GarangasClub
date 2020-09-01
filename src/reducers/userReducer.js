const initialState = {
    name: '',
    email: ''
}

export default (state = initialState, action) => {

    if(action.type === 'SET_NAME') {
        return {...state, name:action.payload.name};
    }

    if(action.type === 'SET_EMAIL') {
        return {...state, email:action.payload.email};
    }

    return state;
}