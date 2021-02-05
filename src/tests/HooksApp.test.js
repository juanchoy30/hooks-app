import React from 'react';
import { shallow } from "enzyme";
import { HooksApp } from '../HooksApp';

describe('<HooksApp /> tests', () => {
    
    test('should render the component correctly', () => {
        
        const wrapper = shallow( <HooksApp /> );
        expect( wrapper ).toMatchSnapshot();

    });
    


})
