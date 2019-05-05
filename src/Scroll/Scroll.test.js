import React from 'react';
import Scroll from './Scroll.js';
import { shallow } from 'enzyme';

describe('Scroll', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(
            <Scroll />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    }); 

    it('Should have default state', () => {
        expect(wrapper.state()).toEqual({films: [], randomFilm: {}})
    });

    
});