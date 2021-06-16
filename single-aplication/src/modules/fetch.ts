import { useEffect, useState } from 'react';
import { Service } from './service';
import { Starship } from './rede';

export interface Starships {
  data: Starship[];
}
const useService = () => {
  const [page, setPage] = useState(1)
  
  const [result, setResult] = useState<Service<Starships>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);


  if(page === 1 ){
    setPage(2)
  }

  return result;
};

export default useService;