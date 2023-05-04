import nextApi from './next-api'
import mongoose from 'mongoose'

console.log(process.env.DB)
mongoose.connect(process.env.DB ?? '')

export default nextApi()
