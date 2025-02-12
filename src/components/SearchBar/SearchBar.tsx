import React, {
  ChangeEvent,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import ISearchBarProps from '@/model/SearchBar';

import styles from './searchbar.module.scss';

const SearchBar: React.FC<ISearchBarProps> = ({
  searchTerm,
  onInputChange,
}): ReactElement => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      onInputChange(event.target.value);
    },
    [onInputChange]
  );

  const handleInputFocus = (): void => setIsFocused(!isFocused);
  const handleButtonHover = (): void => setIsHovered(!isHovered);

  return (
    <form
      role="search"
      className={`${styles.searchbar} ${isFocused ? styles.focused : ''} ${isHovered ? styles.hovered : ''}`}
      onFocus={handleInputFocus}
      onBlur={handleInputFocus}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonHover}
    >
      <input
        ref={inputRef}
        className={styles.searchbar__input}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search characters..."
      />
    </form>
  );
};

export default memo(SearchBar);
