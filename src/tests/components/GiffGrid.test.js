import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GiffGrid } from '../../Components/GiffGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs') //Así simulo cualquier llamada a este archivo y suponer/controlar la info que esto va a responder.


describe('pruebas del componente <GiffGrid/>', () => { 
    
    test('should match with snapshot', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })


        const wrapper = shallow(<GiffGrid category='category' />);
        expect(wrapper).toMatchSnapshot();
     })

    test('should show items when images are loaded with the customhook to fetch', () => { 

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GiffGrid category='category' />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
        
     })


 })