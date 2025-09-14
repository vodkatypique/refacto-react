import DomainFilter from './DomainFilter.component';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { domainsReducer } from '../../redux/domains/reducer';
import { DomainsAction, DomainsState } from '../../redux/domains/types';

const createMockStore = (domains: string[]) => {
  const store = configureStore<{ domains: DomainsState }, DomainsAction>({
    reducer: { domains: domainsReducer },
    preloadedState: { domains }
  });
  return store;
};

const renderWithStore = (domains: string[]) => {
  const store = createMockStore(domains);
  return render(
    <Provider store={store}>
      <DomainFilter />
    </Provider>
  );
};

describe('components', () => {
  describe('DomainFilter', () => {
    it('should render all three selects', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL'];
      
      renderWithStore(domains);

      expect(screen.getAllByRole('listbox')).toHaveLength(3);
    })

    it('should render countries options', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL'];
      
      renderWithStore(domains);

      expect(screen.getByText('US')).toBeTruthy();
      expect(screen.getByText('FR')).toBeTruthy();
    });

    it('should render classifications options', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL'];
      
      renderWithStore(domains);

      expect(screen.getByText('OK')).toBeTruthy();
      expect(screen.getByText('NK')).toBeTruthy();
    });

    it('should render subclassifications options', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL'];
      
      renderWithStore(domains);

      expect(screen.getByText('WOK')).toBeTruthy();
      expect(screen.getByText('WOL')).toBeTruthy();
    });
  })
})
