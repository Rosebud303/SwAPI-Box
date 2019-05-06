import React from 'react';
import PlanetCard from './PlanetCard';
import { shallow } from 'enzyme';

describe('PlanetCard', () => {
    let wrapper;
    let mockPlanet = {name: 'Tatooine', population: 300000}

    beforeEach(() => {
        wrapper = shallow(
            <PlanetCard planet={mockPlanet}
                        key={mockPlanet.name}
            />
        )
    })

    it('should match the snap shot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})