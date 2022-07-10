import { useState, useEffect } from 'react'
import _ from 'lodash'

interface useScrollProps {
  boundary: number
}

const useScroll = function ({ boundary }: useScrollProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(checkIsScrolled({ boundary }))
      setScrollY(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, {
      leading: true,
      trailing: true,
    })
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return { scrollY, isScrolled }
}

const checkIsScrolled = ({ boundary }) => {
  if (window.scrollY === boundary) {
    return false
  } else return true
}

export default useScroll
