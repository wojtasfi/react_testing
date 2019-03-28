import React from "react";
import {shallow, mount} from 'enzyme';
import CommentBox from "components/CommentBox";
import Root from 'Root'


let wrapped;
beforeEach(() => {
    wrapped = mount(<Root>
        <CommentBox/>
    </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
});


// describe is for grouping tests which have same setup and tunr down
describe('the textarea', () => {
    const text = 'elo';

    //beforeEach from the beginning of the file will also be run
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: text}
        });
        //we need to wait for rerender
        wrapped.update();
    });

    it('has a textarea that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(text)
    });

    it('has a textarea which turns empty after submitting form', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(text)

        //when submitting form
        wrapped.find('form').simulate('submit')

        //expect text area to be blank
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    });

})