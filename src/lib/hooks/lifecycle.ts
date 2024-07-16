import { useEffect } from 'react'

export
const useOn_mount = (cb: () => void) => {
  useEffect(() => {
    cb()
  }, [])
}
