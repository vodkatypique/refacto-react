const removeDuplicates = (array: string[]): string[] => {
  return Array.from(new Set(array));
};

const DOMAIN_REGEX = /^([A-Z]+)_([A-Z]+)-([A-Z]+)$/;

export const parseDomain = (domain: string) => {
  const match = domain.match(DOMAIN_REGEX);
  
  if (!match) {
    return null;
  }
  
  return {
    country: match[1],
    classification: match[2],
    subClassification: match[3]
  };
};

export const extractAllDistinctValues = (domains: string[]) => {
  const parsedDomains = domains.map(parseDomain).filter(domain => domain !== null);
  
  return {
    countries: removeDuplicates(parsedDomains.map(d => d!.country)),
    classifications: removeDuplicates(parsedDomains.map(d => d!.classification)),
    subClassifications: removeDuplicates(parsedDomains.map(d => d!.subClassification))
  };
};
