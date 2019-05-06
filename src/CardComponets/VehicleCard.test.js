import React from 'react';
import VehicleCard from './VehicleCard';
import { shallow } from 'enzyme';

describe('VehicleCard', () => {
    let wrapper;
    let mockVehicle = {name: 'sandCrawler', passengers: 30}

    beforeEach(() => {
        wrapper = shallow(
            <VehicleCard vehicle={mockVehicle}
                        key={mockVehicle.name}
            />
        )
    })

    it('should match the snap shot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})