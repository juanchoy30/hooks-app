import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Tests on useForm', () => {
    
    const initialForm = {
        name: 'Juan',
        email: 'juanchoy30@gmail.com'
    };

    test('should return a default form', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });

    test('should change the value of the form (change name)', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Miguel'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Miguel' } );

    });

    test('should reestablish the form with RESET', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Miguel'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm )
        
    });
    
    
    

})
