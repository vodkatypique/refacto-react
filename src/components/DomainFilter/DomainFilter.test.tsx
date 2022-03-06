import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })
})
