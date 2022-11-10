import { Op } from 'sequelize';
import StarDict from '../modals/words';

const getByWord = (word:string) => {
  return StarDict.findOne({
    where:{
      word
    }
  });
};

interface geyAllParams{
  wordLike?:string
  limit?:number
  offset?:number
}

const getAll = (limit = 20,offset = 1)=>{
  return StarDict.findAll({
    where:{
      phonetic:{
        [Op.not]:''
      }
    },
    order:[
      ['bnc','DESC']
    ],
    limit,
    offset
  });
}

const getAllByKeyword = ({wordLike,limit = 20,offset = 1}:geyAllParams)=>{
  return StarDict.findAll({
    where:{
      word:{
        [Op.like]:`${wordLike}%`
      },
      phonetic:{
        [Op.not]:''
      }
    },
    order:[
      ['bnc','DESC']
    ],
    limit,
    offset
  });
};

const getWordsAndDefinition = (wordLike)=>{
  return StarDict.findAll({
    where:{
      word:{
        [Op.like]:`${wordLike}%`
      },
      phonetic:{
        [Op.not]:''
      }
    },
    order:[
      ['bnc','DESC']
    ],
    limit:20,
    attributes:['word','phonetic','translation']
  });
}

export {
  getAll,
  getByWord,
  getAllByKeyword,
  getWordsAndDefinition
};
