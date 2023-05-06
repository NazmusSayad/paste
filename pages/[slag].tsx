import base64 from '../base64'
import ShowPaste from '../src/components/ShowPaste'
import Paste from '../src/model/Paste'

export default function ({ paste, message }) {
  if (message) return message
  return <ShowPaste paste={paste} />
}

export async function getServerSideProps(req) {
  try {
    const { slag } = req.params
    const _id = base64.decode(slag)

    const paste = await Paste.findOne({ where: { _id } })
    if (!paste) throw new Error('Nothing found')

    return {
      props: {
        paste: { ...JSON.parse(JSON.stringify(paste)), _id: slag },
      },
    }
  } catch (err: any) {
    return { props: { message: err.message } }
  }
}
