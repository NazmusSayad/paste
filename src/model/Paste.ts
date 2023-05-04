import mongoose from 'mongoose'

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

export default mongoose.models.paste || mongoose.model('paste', schema)
