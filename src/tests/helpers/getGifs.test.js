import { getFetchGifs } from '../../helpers/getFetchGifs'


describe('Pruebas con getFetchGifs', () => { 
    

    test('should bring 10 elements', async () => { 

        const gifs = await getFetchGifs('Goku');

        expect ( gifs.length ).toBe(10)

     })


     test('should provide a category', async () => { 

        const gifs = await getFetchGifs('whatever');

        expect ( gifs.length ).toBe(10)

     })

 })