import { getResemble } from '../../utils/words';
import { getAll, getAllByKeyword, getByWord, getWordsAndDefinition } from '../dal/words';
import type { IWordResult } from '../interface/words';

const getDetail = async (word:string) => {
  const detail = await getByWord(word);
  const result:IWordResult | null = detail?.get() ?? null
  if(!result) return null;
  result.resemble = getResemble(word)
  return result
};

const getList = async (keyword?:string) => {
  if(keyword) {
    return await getAllByKeyword({wordLike:keyword});
  }
  return await getAll()
};

const getOption = async (keyword?:string) => {
  return await getWordsAndDefinition(keyword)
}

export {
  getDetail,
  getList,
  getOption
};
