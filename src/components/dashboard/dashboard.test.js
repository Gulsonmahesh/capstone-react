import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import RightPane from './RightPane';
import LeftPane from './LeftPane';

const mockStore = configureMockStore();
const store = mockStore({});



describe("All Product Page Snapshot ", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><Dashboard /></Provider>).dive()
    })

    afterEach(() => {
        wrapper.unmount();
    })

    test('Dash board component renderer correctly by snapshot', ()=> {
        expect(wrapper).toMatchSnapshot();
    })

    // test('Dash board component renderer correctly by renderer', ()=> {
    //     expect(wrapper.render());
    // })

    test('Dash board component Left Pane Component', ()=> {
        expect(wrapper.find('.leftpane').length).toEqual(1);
    })

    test('Dash board component Right Pane Component', ()=> {
        expect(wrapper.find(RightPane).length).toEqual(1);
    })

});