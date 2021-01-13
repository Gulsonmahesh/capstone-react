import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utilities/commonfunctions'

import AlertModal from './AlertModal.jsx'

const setup = (props) => {
    const wrapper = shallow(<AlertModal {...props} />)
    console.log(wrapper.debug())
    return wrapper;
}

describe('Alert modal', () => {

    let wrapper;
    let props = {
        message : 'test',
        loginStatus: false
    }

    beforeEach(() => {        
        wrapper = setup(props);
    })

    test('render with out error', () => {
        let com = findByTestAttr(wrapper, 'modal');
        expect(com.length).toBe(1);
    })

    test('Alert message not to be empty', ()=> {
        expect(wrapper.find('p').text()).not.toBeNull();
    })

    test('Alert message fail to the props message', ()=> {
        expect(wrapper.find('p').text()).toEqual('fail props message')
    })

    test('Alert message equal to the props message', ()=> {
        expect(wrapper.find('p').text()).toEqual(props.message)
    })
})