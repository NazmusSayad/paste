import mongoose from 'mongoose'
import connectDB from '../connectDB'

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
)

connectDB()
export default mongoose.models.paste || mongoose.model('paste', schema)
