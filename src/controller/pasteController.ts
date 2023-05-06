import base64 from '../../base64'
import Paste from '../model/Paste'

export async function createPaste(req, res) {
  const paste = await Paste.create({ text: req.body })
  console.log(base64.encode(paste.dataValues._id), paste.dataValues._id)

  res.json({
    paste: {
      ...paste.dataValues,
      _id: base64.encode(paste.dataValues._id),
    },
  })
}
