import { getDomains, getDomainsInfos } from "./selectors";
import { AppState } from "../store";


describe('selectors', () => {
  const state: AppState = {
    domains: [
      'US_OK-WOK',
      'FR_NK-WOL',
      'FR_OK-NPP',
      'EN_NK-NRP',
    ]
  }

  describe('getDomains', () => {
    // This describe must be left untouched, this selector is used on other parts of the application.
    it('should return the domains', () => {
      const domains = getDomains(state);

      expect(domains).toEqual([
        'US_OK-WOK',
        'FR_NK-WOL',
        'FR_OK-NPP',
        'EN_NK-NRP',
      ])
    })
  })

  describe('getDomainsInfo', () => {
    it('should return all distinct values from domains', () => {
      const result = getDomainsInfos(state);
      
      expect(result.countries).toEqual(['US', 'FR', 'EN']);
      expect(result.classifications).toEqual(['OK', 'NK']);
      expect(result.subClassifications).toEqual(['WOK', 'WOL', 'NPP', 'NRP']);
    });

    it('should return empty arrays for empty domains', () => {
      const emptyState: AppState = { domains: [] };
      const result = getDomainsInfos(emptyState);
      
      expect(result.countries).toEqual([]);
      expect(result.classifications).toEqual([]);
      expect(result.subClassifications).toEqual([]);
    });
  });
})
