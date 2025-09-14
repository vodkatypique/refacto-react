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

    it('should handle invalid format gracefully', () => {
      expect(parseDomain('INVALID_FORMAT')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
      });
    });

    it('should handle empty string', () => {
      expect(parseDomain('')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
      });
    });

    it('should parse domain with longer country name', () => {
      expect(parseDomain('FRANCE_OK-WOK')).toEqual({
        country: 'FRANCE',
        classification: 'OK',
        subClassification: 'WOK'
      });
    });

    it('should parse domain with longer classification', () => {
      expect(parseDomain('US_CLASSIFICATION-WOK')).toEqual({
        country: 'US',
        classification: 'CLASSIFICATION',
        subClassification: 'WOK'
      });
    });

    it('should parse domain with longer subclassification', () => {
      expect(parseDomain('US_OK-SOUSCLASSIFICATION')).toEqual({
        country: 'US',
        classification: 'OK',
        subClassification: 'SOUSCLASSIFICATION'
      });
    });

    it('should parse domain with all parts having different lengths', () => {
      expect(parseDomain('FRANCE_CLASSIFICATIONLONGUE-SOUSTCLASSIFICATIONTRESLONGUE')).toEqual({
        country: 'FRANCE',
        classification: 'CLASSIFICATIONLONGUE',
        subClassification: 'SOUSTCLASSIFICATIONTRESLONGUE'
      });
    });

    it('should parse domain with single character parts', () => {
      expect(parseDomain('A_B-C')).toEqual({
        country: 'A',
        classification: 'B',
        subClassification: 'C'
      });
    });

    it('should reject domain with lowercase letters', () => {
      expect(parseDomain('us_ok-wok')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
      });
    });

    it('should reject domain with numbers', () => {
      expect(parseDomain('US1_OK-WOK')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
      });
    });

    it('should reject domain with special characters', () => {
      expect(parseDomain('US_OK-WOK!')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
      });
    });

    it('should reject domain with spaces', () => {
      expect(parseDomain('US OK-WOK')).toEqual({
        country: '',
        classification: '',
        subClassification: ''
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

    it('should handle domains with variable lengths', () => {
      const domains = [
        'US_OK-WOK',
        'FRANCE_CLASSIFICATION-SOUSCLASSIFICATION',
        'A_B-C',
        'FRANCE_CLASSIFICATIONLONGUE-SOUSCLASSIFICATIONTRESLONGUE'
      ];
      const result = extractAllDistinctValues(domains);

      
      expect(result.countries).toEqual(['US', 'FRANCE', 'A']);
      expect(result.classifications).toEqual(['OK', 'CLASSIFICATION', 'B', 'CLASSIFICATIONLONGUE']);
      expect(result.subClassifications).toEqual(['WOK', 'SOUSCLASSIFICATION', 'C', 'SOUSCLASSIFICATIONTRESLONGUE']);
    });
  });
});
