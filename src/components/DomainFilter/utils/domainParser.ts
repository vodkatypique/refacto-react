const removeDuplicates = (array: string[]): string[] => {
  return Array.from(new Set(array));
};

export const parseDomain = (domain: string) => {
  const country = domain.substring(0, 2);
  const classification = domain.substring(3, 5);
  const subClassification = domain.substring(6);
  return { country, classification, subClassification };
};

export const extractAllDistinctValues = (domains: string[]) => {
  const parsedDomains = domains.map(parseDomain);
  
  return {
    countries: removeDuplicates(parsedDomains.map(d => d.country)),
    classifications: removeDuplicates(parsedDomains.map(d => d.classification)),
    subClassifications: removeDuplicates(parsedDomains.map(d => d.subClassification))
  };
};
