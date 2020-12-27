import ethers from 'ethers'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })
// import ethers from 'ethers'

const privKey = process.env.GATSBY_PRIV_KEY
export const connectToEthereum = () => {
  console.log('PRIV_KEY: ', privKey)

  // LOAD
}

export const fetchArt = () => {
  const str = `
  `
  return str
}