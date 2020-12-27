import * as React from 'react'
import { css } from '@emotion/core'
import { Link, navigate } from 'gatsby'

import IndexLayout from '../layouts'
import { connectToEthereum, fetchArt } from '../components/connectBC'
import P5Scene from '../scenes/P5Scene'
import Background from '../components/Background'

const IndexPage = () => (
  <Background>
    <div className="absolute w-full h-full">
      <div className="flex justify-center pt-40" css={css`top: 50%;`}>
        <button className="text-white border p-6" onClick={() => {

          const artStr: string = fetchArt()
          localStorage.setItem('art', artStr)
          navigate(`/canvas`)
        }
        }>FETCH YOUR OWN ART</button>
      </div>
    </div>
    <P5Scene />
  </Background>

)

export default IndexPage
