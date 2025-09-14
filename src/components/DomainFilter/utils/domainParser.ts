export const parseDomain = (domain: string) => {
  const country = domain.substring(0, 2);
  const classification = domain.substring(3, 5);
  const subClassification = domain.substring(6);
  return { country, classification, subClassification };
};

export const extractDistinctCountries = (domains: string[]): string[] => {
  const countries: string[] = [];
  
  domains.forEach(domain => {
    const { country } = parseDomain(domain);
    if (!countries.includes(country)) {
      countries.push(country);
    }
  });
  return countries;
};

export const extractDistinctClassifications = (domains: string[]): string[] => {
  const classifications: string[] = [];
  domains.forEach(domain => {
    const { classification } = parseDomain(domain);

    if (!classifications.includes(classification)) {
      classifications.push(classification);
    }
  });

  return classifications;
};

export const extractDistinctSubClassifications = (domains: string[]): string[] => {
  const subClassifications: string[] = [];
  domains.forEach(domain => {
    const { subClassification } = parseDomain(domain);
    if (!subClassifications.includes(subClassification)) {
      subClassifications.push(subClassification);
    }
  });
  return subClassifications;
};
