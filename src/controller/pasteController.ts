import Paste from '../model/Paste'

export async function createPaste(req, res) {
  const paste = await Paste.create({ text: req.body })
  res.json({ paste })
}
