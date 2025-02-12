import { FC } from 'react';

import { ICharacter } from '@/model/api.ts';

import styles from './character-card.module.scss';

const CharacterCard: FC<{ character: ICharacter }> = ({ character }) => {
  return (
    <article className={styles.card}>
      <a
        href={character.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['card__link']}
      >
        <div className={styles['card__info']}>
          <h3 className={styles['card__title']}>
            {character.name} - {character.species}
          </h3>
          <div className={styles['card__details']}>
            <p className={styles['card__status']}>
              Status:{' '}
              <span className={styles[character.status.toLowerCase()]}>
                {character.status}
              </span>
            </p>
            <p className={styles['card__created']}>
              Created: {new Date(character.created).toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default CharacterCard;
