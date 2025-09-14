import Select from '../Select';
import { useSelector } from 'react-redux';
import { getDomainsInfos } from '../../redux/domains/selectors';

const DomainFilter = () => {
  const { countries, classifications, subClassifications } = useSelector(getDomainsInfos);
  
  return (<>
    <Select name="countries" options={countries} />
    <Select name="classifications" options={classifications} />
    <Select name="subClassifications" options={subClassifications} />
  </>);
}

export default DomainFilter
