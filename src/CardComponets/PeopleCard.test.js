import React from 'react';
import PeopleCard from './PeopleCard';
import { shallow } from 'enzyme';

describe('PeopleCard', () => {
    let wrapper;
    let mockPeople = {name: 'Luke Skywalker', homeworld: 'Tatooine'}

    beforeEach(() => {
        wrapper = shallow(
            <PeopleCard people={mockPeople}
                        key={mockPeople.name}
            />
        )
    })

    it('should match the snap shot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})