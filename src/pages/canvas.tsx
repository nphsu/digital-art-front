import React, { useEffect } from "react"
import p5 from 'p5'
import sketch from '../components/sketch'

const CanvasPage = () => {
  useEffect(() => {
    new p5(sketch)
  }, [])
  return (
    <></>
  )
}

export default CanvasPage