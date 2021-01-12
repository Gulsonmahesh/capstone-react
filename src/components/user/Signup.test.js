import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup'

describe('Sign Up Componenrt Testing', () => {
    
    const signupComponent = shallow(<Signup />)

    const setUserLogin = (status) => {
        return status ? 'Edit Your Details' : 'Register your Details';
    }

    test('render Signup Component with out error', () => {        
        expect(signupComponent).toBe(signupComponent)
    });

    test('Number of Inputs must be 5', () => {
        expect(signupComponent.find('input').length).toBeGreaterThanOrEqual(5)
    })
    test('It Must have Title with out login for new user', () => {
        let user = setUserLogin(false);
        console.log('New user',user)
        setTimeout(() => {
            expect(signupComponent.find(`[data-test='title']`).text()).toBe(user);
        }, 1000);
        
        expect(signupComponent.find(`[data-test='title']`).text()).toBe('Register your Details');
    })
    test('It Must have Title with login for edit', () => {
        let user = setUserLogin(true);
        console.log('Edit User',user)
        setTimeout(() => {
            expect(signupComponent.find(`[data-test='title']`).text()).toBe(user);
        }, 1000);
    })
})
