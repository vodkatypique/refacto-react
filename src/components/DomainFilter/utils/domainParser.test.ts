import { 
  parseDomain, 
  extractAllDistinctValues 
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

  describe('extractAllDistinctValues', () => {

    it('should return empty arrays for empty input', () => {
      const result = extractAllDistinctValues([]);
      
      expect(result.countries).toEqual([]);
      expect(result.classifications).toEqual([]);
      expect(result.subClassifications).toEqual([]);
    });

    it('should return all distinct values without duplicates', () => {
      const domains = ['US_OK-WOK', 'FR_NK-WOL', 'US_BL-NPP', 'FR_OK-WOK'];
      const result = extractAllDistinctValues(domains);
      
      expect(result.countries).toEqual(['US', 'FR']);
      expect(result.classifications).toEqual(['OK', 'NK', 'BL']);
      expect(result.subClassifications).toEqual(['WOK', 'WOL', 'NPP']);
    });

    it('should handle single domain', () => {
      const result = extractAllDistinctValues(['US_OK-WOK']);
      
      expect(result.countries).toEqual(['US']);
      expect(result.classifications).toEqual(['OK']);
      expect(result.subClassifications).toEqual(['WOK']);
    });
  });
});
