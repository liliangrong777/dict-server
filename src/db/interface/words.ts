import type { Model } from 'sequelize'

export interface IWord {
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
}
export type IWords = IWord[]
export type IOptions = Pick<IWord,'word'|'translation'>[]
export type WordInstance = Model<IWord> & IWord

