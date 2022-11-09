import { getAll, getAllByKeyword, getByWord, getWordsAndDefinition } from '../dal/words';

const getDetail = async (word:string) => {
  return await getByWord(word);
};

const getList = async (keyword?:string) => {
  if(keyword) {
    return await getAllByKeyword({wordLike:keyword});
  }
  return await getAll()
};

const getOption = async (keyword?:string) => {
  if(!keyword) {
    return {success:false}
  }
  return await getWordsAndDefinition(keyword)
}

export {
  getDetail,
  getList,
  getOption
};
