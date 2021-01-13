import React from 'react'
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Dashboard from './Dashboard.jsx';
import LeftPane from './LeftPane.jsx';
import RightPane from './RightPane.jsx';

describe('Dash board component testing', () => {

    const mockStore = configureMockStore();
    const store = mockStore({});
    let enzymeWrapper;

    beforeEach(() => {
        enzymeWrapper = shallow(<Provider store={store}><Dashboard /></Provider>);
    })

    afterEach(() => {
        enzymeWrapper.unmount();
    })
    test('Render with out error using snapshot', () => {
        console.log('Render Using Snapshot');
        expect(enzymeWrapper).toMatchSnapshot()
    })

    test('Dashboard have a leftpane',()=>{
        expect(enzymeWrapper.containsMatchingElement(<LeftPane />)).toBeDefined()
        console.log('Dashboard have a LeftPane');
    })

    test('Dashboard have a rightpane',()=>{
        expect(enzymeWrapper.find(<RightPane />)).toBeDefined()
        console.log('Dashboard have a RightPane');
    })

});
