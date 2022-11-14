import type { IOptions, IWordResult } from '../../db/interface/words';
import * as wordServices from '../../db/services/words';
import { ErrorResult, SuccessResult } from '../../utils/Result';

const getDetail = async (word:string) => {
  const data = await wordServices.getDetail(word);
  return new SuccessResult<IWordResult>(data,200)
};

const getList = async (keyword?:string) => {
  const data = await wordServices.getList(keyword)
  return new SuccessResult<IWordResult[]>(data,200)
};

const getOption = async (keyword:string) => {
  if(!keyword) {
    return new ErrorResult('keyword不能为空',400)
  }
  const data = await wordServices.getOption(keyword)
  return new SuccessResult<IOptions>(data,200)
}

export {
  getDetail,
  getList,
  getOption
};
