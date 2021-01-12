import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';

import App from './App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App Component', () => {
  test('Render App Component without Error', () => {
    const appComponent = shallow(<Provider store={store}><App /></Provider>);
    expect(appComponent).toBe(appComponent);
    console.log('Rendered Successfully');
  });
  
})
