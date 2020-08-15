import * as actionTypes from '../actions/action_types.js';
import { updateObject } from '../../shared/utility';


const initalState = {
    showCourse: false,
    course: {}
};

const setCourse = (state, action) => {
    return updateObject(state, {
        showCourse: action.show,
        course: action.course
    });
}

// setting up reducer
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COURSE_STATE: return setCourse(state, action);
        default:
            return state;
    }
}

export default reducer;