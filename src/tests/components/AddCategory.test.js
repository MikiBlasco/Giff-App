import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../Components/AddCategory';


describe('Pruebas en <AddCategory/>', () => { 

    const setCategories = jest.fn(); //esto nos permite analizar y testear mejor la función.
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach(()=>{

        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    })


    test('should shor correctly', () => {     
        expect( wrapper ).toMatchSnapshot();
     })

    test('should change the text box', () => {

        const value = 'Hola Mundo'
        const input = wrapper.find('input');
        input.simulate('change', { target: {value: value} }); //no es "On"change, solo change.
        expect( wrapper.find('p').text().trim() ).toBe( value )

    })

    test('should not post information on sumbit', () => { 
        
        const submit = wrapper.find('form');
        submit.simulate('submit', { preventDefault: () => {} }) //no es "On"submit, solo submit.
        expect(setCategories).not.toHaveBeenCalled();

     })

     test('should call setCategories and clean the text box', () => { 

        const value = "Hola Mundo"
        //simulamos input change:
        wrapper.find('input').simulate('change', { target: { value } }); 
        //simulamos submit:    
        wrapper.find('form').simulate('submit', {preventDefault: () => {} });
        //setCategories have been called, 1 time and trough a function:
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //el valor del input tiene que ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
                
      })

 })