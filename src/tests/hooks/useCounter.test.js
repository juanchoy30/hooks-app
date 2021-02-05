import { renderHook, act } from '@testing-library/react-hooks';  // act for tests on Hooks
import { useCounter } from '../../hooks/useCounter';

describe('useCounter Tests', () => {

    const initialValue = 100;
    
    test('should return default values', () => {
        
        const { result } = renderHook( () => useCounter() );
        const defaultValue = 10;

        expect( result.current.counter ).toBe( defaultValue );
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });

    test('should return given value, this case 100', () => {
        
        const { result } = renderHook( () => useCounter( initialValue ) );

        expect( result.current.counter ).toBe( initialValue );


    });

    test('should increment the counter by one', () => {
        
        const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment } = result.current;

        act( () => {

            increment();

        });

        const { counter } = result.current;
        expect( counter ).toBe( initialValue + 1 );

    });

    test('should decrement the counter by one', () => {
        
        const { result } = renderHook( () => useCounter( initialValue ) );
        const { decrement } = result.current;

        act( () => {

            decrement();

        });

        const { counter } = result.current;
        expect( counter ).toBe( initialValue - 1 );

    });

    test('should reset the value to the original', () => {
        
        const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment, reset } = result.current;

        act( () => {

            increment();
            reset();

        });

        const { counter } = result.current;
        expect( counter ).toBe(initialValue);

    })
    
    
    
    

})
