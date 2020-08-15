import * as actionsTypes from './action_types';

export const setCourseData = (show, course) => {
    return {
        type: actionsTypes.CHANGE_COURSE_STATE,
        show,
        course
    }
}