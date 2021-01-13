import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import ProductDetails from './ProductDetails.jsx'

const findByTestAttr = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`)
    return wrapper;
}

describe('Dash board component testing', () => {

    const mockStore = configureMockStore();
    const store = mockStore({});
    let enzymeWrapper;

    beforeEach(() => {
        let props = {
            product :
            {productsincart: false}
        }
        enzymeWrapper = shallow(<Provider store={store}><ProductDetails /></Provider>).childAt(0)
    })

    test('Render with out error using snapshot', () => {
        console.log(enzymeWrapper.debug())
        let com = findByTestAttr(enzymeWrapper, 'productdetails')
        expect(com.length).toBe(1)
    })

})