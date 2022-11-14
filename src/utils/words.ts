import type { ResembleInfo } from '../db/interface/words'
import resemble from '../static/resemble.json'
import wordResembleMap from '../static/wordmap.json'
export const getResemble = (word:string)=>{
  const resembleKey = wordResembleMap[word]
  if(resemble[resembleKey]) {
    return resemble[resembleKey] as ResembleInfo
  }
  return null
}
