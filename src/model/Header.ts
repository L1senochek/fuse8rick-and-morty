import ISearchBarProps from '@/model/SearchBar.ts';

interface IHeaderProps extends ISearchBarProps {
  countCharacter: number;
  loading: boolean;
}

export default IHeaderProps;
