import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ProductList from './ProductList.jsx';

describe("Product list Snapshot ", () => {
    let props = {
        filterProduct : {
            selectedBrand : 'All'
        }
    }
    test("renders Correctly", () => {
        let enzymeWrapper = shallow(<ProductList {...props} />);
        console.log(enzymeWrapper)
        expect(toJson(enzymeWrapper)).toMatchSnapshot();
    })
});