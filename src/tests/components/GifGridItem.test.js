import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem }  from '../../Components/GifGridItem';


describe('pruebas del componente <GifGridItem />', () => { 

    const title = 'string1'
    const url = 'string2'
    let wrapper = shallow( <GifGridItem title={title} url={url}/> )

    test('should shoe <GifGridItem /> correctly (matching with snapshot', () => { 

        expect(wrapper).toMatchSnapshot();
     })

     test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

     })

     test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );        

     })

     test('debe tener animate__bounceIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className')

        expect(className.includes('animate__bounceIn')).toBe(true);
        //expect(div.hasClass('animate__bounceIn')).toBe(true);
        //expect(div.hasClass('animate__bounceIn')).toBeTruthy();

     })

    


 })