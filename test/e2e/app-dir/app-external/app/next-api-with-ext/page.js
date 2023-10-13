'use client'
import { redirect } from 'next-api-esm'

export default function page() {
  console.log('redirect', redirect)
  return <p>{typeof redirect}</p>
}
