import nextApi from './next-api'
export default nextApi({
  errorHandler(err, req, res) {
    res.json({ message: 'something went wrong' })
  },
})
