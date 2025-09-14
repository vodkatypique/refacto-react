import { 
  parseDomain, 
  extractDistinctCountries, 
  extractDistinctClassifications, 
  extractDistinctSubClassifications 
} from './domainParser';

describe('domainParser', () => {
  describe('parseDomain', () => {
    it('should parse US_OK-WOK correctly', () => {
      expect(parseDomain('US_OK-WOK')).toEqual({
        country: 'US',
        classification: 'OK',
        subClassification: 'WOK'
      });
    });

    it('should parse FR_NK-WOL correctly', () => {
      expect(parseDomain('FR_NK-WOL')).toEqual({
        country: 'FR',
        classification: 'NK',
        subClassification: 'WOL'
      });
    });

    it('should parse EN_BL-NPP correctly', () => {
      expect(parseDomain('EN_BL-NPP')).toEqual({
        country: 'EN',
        classification: 'BL',
        subClassification: 'NPP'
      });
    });
  });

  describe('extractDistinctCountries', () => {
    it('should return empty array for empty input', () => {
      expect(extractDistinctCountries([])).toEqual([]);
    });

    it('should return unique countries without duplicates', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL', 'US_BL-NPP', 'FR_OK-WOK'];
      expect(extractDistinctCountries(domains)).toEqual(['US', 'FR']);
    });
  });

  describe('extractDistinctClassifications', () => {
    it('should return empty array for empty input', () => {
      expect(extractDistinctClassifications([])).toEqual([]);
    });

    it('should return unique classifications without duplicates', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL', 'US_OK-NPP', 'EN_BL-WOL'];
      expect(extractDistinctClassifications(domains)).toEqual(['OK', 'NK', 'BL']);
    });
  });

  describe('extractDistinctSubClassifications', () => {
    it('should return empty array for empty input', () => {
      expect(extractDistinctSubClassifications([])).toEqual([]);
    });

    it('should return unique sub-classifications without duplicates', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL', 'US_OK-NPP', 'EN_BL-WOL'];
      expect(extractDistinctSubClassifications(domains)).toEqual(['WOK', 'WOL', 'NPP']);
    });
  });
});
