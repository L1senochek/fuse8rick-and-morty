import { ICharacter } from '@/model/api.ts';

interface IMainProps {
  data: ICharacter[] | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

export default IMainProps;
