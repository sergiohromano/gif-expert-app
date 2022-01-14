import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from './../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe de mostrarse correctamente', ( ) => {
        expect(wrapper).toMatchSnapshot();
    })


    test('debe de cambiar la caja de texto', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('input')
        input.simulate('change', {
            target: { value }
        });
        expect(wrapper.find('input').prop('value')).toBe(value);
    })

    test('no debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategiers y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {
            target: { value }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})