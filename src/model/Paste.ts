import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize(process.env.DB as any)

const schema = {
  _id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}

const model = sequelize.define('paste', schema)
sequelize.sync()
export default model
