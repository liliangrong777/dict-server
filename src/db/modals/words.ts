import { DataTypes } from 'sequelize';
import sequelize from '../init';
import type { WordInstance} from '../interface/words';

const StarDict = sequelize.define<WordInstance>('starDict', {
  word: {
    type: new DataTypes.STRING(64),
    allowNull: false,
    unique: true,
    primaryKey:true
  },
  phonetic: {
    type: new DataTypes.STRING(64),
  },
  definition: {
    type: DataTypes.TEXT,
  },
  translation: {
    type: DataTypes.TEXT,
  },
  pos: {
    type: new DataTypes.STRING(16),
  },
  collins: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  oxford: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  tag: {
    type: new DataTypes.STRING(64),
  },
  bnc: {
    type: new DataTypes.STRING(64),
    defaultValue: null
  },
  frq: {
    type: new DataTypes.STRING(64),
    defaultValue: null
  },
  exchange: {
    type: DataTypes.TEXT,
  },
  detail: {
    type: DataTypes.TEXT,
  },
  audio: {
    type: DataTypes.TEXT,
  }
}, { tableName: 'stardict' ,createdAt:false,updatedAt:false});

export default StarDict;

