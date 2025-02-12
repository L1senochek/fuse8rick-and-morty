import { FC, ReactElement } from 'react';

import { SearchBar } from '@/components/SearchBar';
import IHeaderProps from '@/model/Header.ts';

import styles from './header.module.scss';

const Header: FC<IHeaderProps> = ({
  countCharacter,
  searchTerm,
  onInputChange,
  loading,
}): ReactElement => {
  return (
    <header className={styles['header']}>
      <section className={styles['header__content']}>
        <SearchBar searchTerm={searchTerm} onInputChange={onInputChange} />
        <p className={styles['header__info']}>
          {searchTerm.length >= 3 && !loading && (
            <>Found characters: {countCharacter}</>
          )}
        </p>
      </section>
    </header>
  );
};

export default Header;
