// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
require('dotenv').config();

import {Sequelize} from 'sequelize';
const {DB_USER, DB_PASSWORD, DB_NAME} = process.env;
const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql'
});

export default sequelize;
