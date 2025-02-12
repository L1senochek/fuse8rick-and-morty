import { useEffect, useState } from 'react';

import { fetchCharacters } from '@/api/api.ts';
import { IApiResponse, ICharacter, ICharacterInfo } from '@/model/api.ts';

const useFetchCharacters = (searchString: string) => {
  const [data, setData] = useState<ICharacter[] | null>(null);
  const [dataInfo, setDataInfo] = useState<ICharacterInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataFromServer = async (result: string) => {
    setLoading(true);
    const searchKeywordByName = `?name=${result}`;
    try {
      const response: IApiResponse | number =
        await fetchCharacters(searchKeywordByName);

      if (typeof response === 'number') {
        setError(`Failed to fetch. Status code: ${response}`);
        return;
      }

      setData(response.results);
      setDataInfo(response.info);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeoutId: number | undefined = undefined;
    (() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (searchString.length >= 3) {
          fetchDataFromServer(searchString).then(() => {});
        } else {
          setData(null);
        }
      }, 500) as unknown as number;
    })();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [searchString]);

  return { data, error, loading, dataInfo };
};

export default useFetchCharacters;
