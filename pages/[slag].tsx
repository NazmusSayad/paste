import ShowPaste from '../src/components/ShowPaste'
import Paste from '../src/model/Paste'

export default function ({ paste, message }) {
  return <ShowPaste paste={paste} />
}

export async function getServerSideProps(req) {
  try {
    const { slag } = req.params
    const paste = (await Paste.findById(slag).lean()) as any
    if (!paste) throw new Error('Nothing found')

    return {
      props: {
        paste: JSON.parse(JSON.stringify(paste)),
      },
    }
  } catch (err: any) {
    return { props: { message: err.message } }
  }
}
