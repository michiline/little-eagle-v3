import { useEffect } from 'react'

const useOnKeyDown = ({ handleClick, key }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === key) {
        handleClick()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleClick, key])
  return
}

export default useOnKeyDown
