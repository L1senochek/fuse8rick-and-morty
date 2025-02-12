export enum CharacterStatus {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export enum CharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

export interface ICharacter {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type?: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IApiResponse {
  info: ICharacterInfo;
  results: ICharacter[];
}
