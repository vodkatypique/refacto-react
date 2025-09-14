const removeDuplicates = (array: string[]): string[] => {
  return Array.from(new Set(array));
};

export const parseDomain = (domain: string) => {
  const country = domain.substring(0, 2);
  const classification = domain.substring(3, 5);
  const subClassification = domain.substring(6);
  return { country, classification, subClassification };
};

export const extractDistinctCountries = (domains: string[]): string[] => {
  const uniqueDomains = removeDuplicates(domains);
  return uniqueDomains.map(domain => parseDomain(domain).country);
};

export const extractDistinctClassifications = (domains: string[]): string[] => {
  const uniqueDomains = removeDuplicates(domains);
  return uniqueDomains.map(domain => parseDomain(domain).classification);
};

export const extractDistinctSubClassifications = (domains: string[]): string[] => {
  const uniqueDomains = removeDuplicates(domains);
  return uniqueDomains.map(domain => parseDomain(domain).subClassification);
};
