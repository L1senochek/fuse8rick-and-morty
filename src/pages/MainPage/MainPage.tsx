import { FC, ReactElement, useCallback, useEffect, useState } from 'react';

import { useFetchCharacters } from '@/hooks/useFetchCharacters';
import { IMainPageProps } from '@/model/MainPage.ts';
import { Header } from '@/widgets/Header';
import { Main } from '@/widgets/Main';

const MainPage: FC<IMainPageProps> = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countCharacter, setCountCharacter] = useState<number>(0);
  const { data, dataInfo, error, loading } = useFetchCharacters(searchTerm);

  const handleSearchInputChange = useCallback((value: string): void => {
    setSearchTerm(value);
  }, []);

  useEffect(() => {
    if (dataInfo && dataInfo?.count) {
      if (data && data.length > 0 && !error) {
        setCountCharacter(dataInfo.count);
      } else if (error) {
        setCountCharacter(0);
      }
    }
  }, [data, dataInfo, error, loading]);

  return (
    <>
      <Header
        countCharacter={countCharacter}
        searchTerm={searchTerm}
        onInputChange={handleSearchInputChange}
        loading={loading}
      />
      <Main
        data={data}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default MainPage;
