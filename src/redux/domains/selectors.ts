import { AppState } from '../store'
import { extractAllDistinctValues } from '../../components/DomainFilter/utils/domainParser'

export function getDomains(state: AppState): string[] {
  return state.domains
}

export function getDomainsInfos(state: AppState) {
  return extractAllDistinctValues(state.domains)
}
