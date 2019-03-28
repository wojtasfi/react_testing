import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from "../../actions/types";


it('handles actions of type SAVE_COMMENT', () => {
    const newComment = 'comment';
    const action = {
        type: SAVE_COMMENT,
        payload: newComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([newComment])
});


it('handles actions of unknown types', () => {
    const newState = commentsReducer([], {type: 'Different'});

    expect(newState).toEqual([])
});