import { useState } from 'react'
const INITIAL_STATUS = { loading: false, error: null }

export default function useStatus() {
  const [status, setStatus] = useState({ ...INITIAL_STATUS })

  return {
    status,
    setStatus: {
      loading(loading = true) {
        setStatus({ ...INITIAL_STATUS, loading })
      },
      error(error) {
        setStatus({ ...INITIAL_STATUS, error })
      },
    },
  }
}
