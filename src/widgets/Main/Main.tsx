import { FC, ReactElement } from 'react';

import { CharacterCard } from '@/components/CharacterCard';
import IMainProps from '@/model/Main.ts';

import styles from './main.module.scss';

const Main: FC<IMainProps> = ({
  loading,
  error,
  data,
  searchTerm,
}): ReactElement => {
  return (
    <main className={styles['main']}>
      {loading && <p className={styles['main__loading']}>Loading...</p>}
      {searchTerm.length > 3 && error && (
        <p className={styles['main__error']}>{error}</p>
      )}
      {data && data.length > 0 && !error ? (
        <section className={styles['main__cards']}>
          {data.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </section>
      ) : (
        !loading &&
        data && <p className={styles['main__no-results']}>No results found</p>
      )}
    </main>
  );
};

export default Main;
