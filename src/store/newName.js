
const ADD_PREDICTION = "ADD_PREDICTION";
const REMOVE_PREDICTION = "REMOVE_PREDICTION";

const local = () => {
    if (localStorage.getItem('info')) {
        const storedList = JSON.parse(localStorage.getItem('info'));
        return storedList
      }
    const storedLists = []
}

const defaultState =    {
    newPosts:local()
}

export const newPostReduser = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_PREDICTION":
           return {...state, newPosts:[...state.newPosts, action.payload] }
            case "REMOVE_PREDICTION":
            return {...state, newPosts: action.payload  }
            
            default:
        return state
    }
}
export const addPredictionsAction = (payload) => ({type:ADD_PREDICTION, payload})
export const removePredictionsAction = (payload) => ({type:REMOVE_PREDICTION, payload})

