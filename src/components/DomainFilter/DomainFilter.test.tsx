import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './NewDomainFilter.component';
import { render, screen } from '@testing-library/react';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })

    it('should render', async () => {
      render(<DomainFilter domains={['do']} />);

      expect(await screen.findByText('do')).toBeTruthy();
    });
  })
})
