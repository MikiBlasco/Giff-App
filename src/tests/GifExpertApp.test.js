import React from 'react';
import '@testing-library/jest-dom';
import  {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';



describe('pruebas del componente <GifExpertApp/>', () => {

   test('should match with snapshot', () => { 
       const wrapper = shallow(<GifExpertApp/>)
       expect(wrapper).toMatchSnapshot();
    })

    test('should show a list of categories', () => { 

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiffGrid').length).toBe(categories.length);
        
     })

})