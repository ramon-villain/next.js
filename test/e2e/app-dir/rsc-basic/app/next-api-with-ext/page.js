import mod, { headers } from 'next/navigation.js'

export default function page() {
  // const cjs = require('next/navigation.js')
  console.log('mod', mod, 'headers', headers)

  headers()
  return null
}
