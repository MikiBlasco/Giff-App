import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('should return the initial state', async() => { 
        
       const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
       const { data, loading} = result.current;
        
        await waitForNextUpdate();
        expect ( data ).toEqual([]);
        expect ( loading ).toBe(true);
     }) 

     test('should return an image array and loading in false', async() => { 
         
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon ball' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect ( data.length ).toBe( 10 );
        expect ( loading ).toBe(false);


      })
})