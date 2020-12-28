import React, { useEffect } from 'react'
import p5 from 'p5'
import sketch from '../components/sketch'

const CanvasPage = () => {
  useEffect(() => {
    const ref = React.createRef()
    new p5(sketch, ref.current)
  }, [sketch])

  return <></>
}

export default CanvasPage
