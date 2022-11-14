import type { Model } from 'sequelize'

export interface ResembleInfo{
  text:string,
  words:string[]
}
export interface IWordResult {
  word: string
  phonetic?: string
  definition?: string
  translation?: string
  pos?: string
  collins?: number
  oxford?: number
  tag?: string
  bnc?: string
  frq?: string
  exchange?: string
  detail?: string
  audio?: string
  resemble?: ResembleInfo | null
}

export type IWord = Omit<IWordResult, 'resemble'>
export type IWords = IWord[]
export type IOptions = Pick<IWord, 'word' | 'translation'>[]
export type WordInstance = Model<IWord> & IWord

