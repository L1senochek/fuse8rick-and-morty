import { IApiResponse } from '@/model/api.ts';

const baseUrl: string = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(
  keyword: string = ''
): Promise<IApiResponse | number> {
  const api: string = `${baseUrl}/character/${keyword}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}
