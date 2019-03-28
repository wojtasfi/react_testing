import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched1'}, {name: 'Fetched2'}, {name: 'Fetched3'}]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comment ans display them', (done) => {

    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(3);
        done(); //JEST will not end test until done is called
        wrapped.unmount()
    }, 100)


});
//
// setTimeout(() => {
//     wrapped.update();
//     expect(wrapped.find('li').length).toEqual(3);
//     done(); //JEST will not end test until done is called
//     wrapped.unmount()
// }, 100)
