import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store'
import { extractAllDistinctValues } from '../../components/DomainFilter/utils/domainParser'

export const getDomains = (state: AppState): string[] => state.domains

export const getDomainsInfos = createSelector(
  [getDomains],
  (domains) => extractAllDistinctValues(domains)
)
