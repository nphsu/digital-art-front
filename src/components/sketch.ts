import p5 from 'p5'

const circle = (p: p5) => {
  const setUpStr = `
    p.setup = () => {
      p.createCanvas(400, 400, p.WEBGL)
      p.angleMode(p.DEGREES)
    }
    `
  const drawStr = `
    p.draw = () => {
      p.background(30)
      p.rotateX(60)
      p.noFill()
      p.stroke(255)

      for (let i = 0; i < 50; i++) {
    
        let r = p.map(p.sin(p.frameCount / 2), -1, 1, 100, 200)
        let g = p.map(i, 0, 50, 100, 200)
        let b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
        
        p.stroke(r, g, b)
        p.rotate(p.frameCount/20)
        
        p.beginShape()
        for (let j = 0; j < 360; j += 60) {
          let rad = i * 3
          let x = rad * p.cos(j)
          let y = rad * p.sin(j)
          let z = p.sin(p.frameCount * 2 + i * 5) * 50
          p.vertex(x, y, z)
        }
        p.endShape(p.CLOSE)
      }
    }
    `
  // eslint-disable-next-line no-new-func
  const setUpFn = new Function('p', setUpStr)
  setUpFn(p)
  // eslint-disable-next-line no-new-func
  const drawFn = new Function('p', drawStr)
  drawFn(p)
}
export default circle
