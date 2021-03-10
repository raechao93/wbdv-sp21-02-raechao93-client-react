const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "DELETE_LESSON":
                const NewDelete = {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return NewDelete
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(u => {
                    if(u._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return u
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer
