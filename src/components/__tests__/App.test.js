import React from "react";
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList"; //thanks to NODE_PATH=/src

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App/>);
});


it('shows comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
});

it('shows comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
});