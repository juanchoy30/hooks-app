import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Tests on <HomeScreen />', () => {

    const user = {
        name: 'Juan',
        email: 'juanchoy30@gmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen /> 
        </UserContext.Provider>
    );
    
    test('should render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    


})
