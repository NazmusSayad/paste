import mongoose from 'mongoose'

export default function () {
  mongoose.connect(process.env.DB ?? '')
}
