import type { NextPage } from 'next'
import { useRef } from 'react'

const Home: NextPage = () => {
  const textarea = useRef<HTMLTextAreaElement>()!

  async function handleSubmit() {
    const res = await fetch('/api/paste', {
      method: 'POST',
      body: textarea.current!.value,
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <div>
        <textarea ref={textarea as any} />
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default Home
