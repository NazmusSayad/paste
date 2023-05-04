import { useRouter } from 'next/navigation'

const Home = ({ setStatus }) => {
  const router = useRouter()

  async function handleClick(e) {
    e.preventDefault()
    setStatus.loading(true)

    try {
      const pasteText = document.getElementById(
        'paste-text'
      ) as HTMLTextAreaElement

      const res = await fetch('/api/paste', {
        method: 'POST',
        body: pasteText.value,
      })

      const data = await res.json()
      if (data) router.push(`/${data.paste._id}`)

      setStatus.loading(false)
    } catch (err: any) {
      setStatus.error(err.message)
    }
  }

  return <button onClick={handleClick}>Save</button>
}

export default Home
