import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from './../../components/GifGrid'
import { useFetchGifs } from './../../hooks/useFetchGifs'
jest.mock('./../../hooks/useFetchGifs')


describe('Pruebas en <GifGridItem />',() => {
    const category = 'One Punch';
    
    test('debe de mostrar el component correctamente',() => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan iimágenes useFetchGifs',() => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.jpg',
            title: 'Cualquier cosa'
        },{
            id: 'DEF',
            url: 'https://localhost/imagen.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})