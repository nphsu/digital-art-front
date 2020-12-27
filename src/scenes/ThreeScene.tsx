import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'
import { css } from '@emotion/core'
import { BoxBufferGeometry, BoxGeometry, PointsMaterial } from 'three'

const newScene = () => {
  const scene = new THREE.Scene()
  return scene
}

const newCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.x = 100
  camera.position.y = 100
  camera.position.z = 400
  return camera
}

const newRenderer = (mount: React.RefObject<HTMLInputElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.autoClear = true
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}

const ThreeScene = () => {
  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    // scene
    const scene = newScene()

    // camera
    const camera = newCamera()

    // renderer
    const renderer = newRenderer(mount)

    // mesh
    const geometry = new THREE.BoxGeometry(50, 50, 50)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const points = new THREE.Points(new BoxBufferGeometry(), new PointsMaterial({ size: 0.1, vertexColors: true }))
    scene.add(points)

    // render
    const render = () => {
      renderer.render(scene, camera)
    }

    // animation
    const animate = () => {
      requestAnimationFrame(animate)
      render()
    }
    animate()
  }, [])
  return (
    <>
      <div css={css``} ref={mount} />
    </>
  )
}
export default ThreeScene
