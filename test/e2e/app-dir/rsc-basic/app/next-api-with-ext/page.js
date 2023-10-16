'use client'

import { redirect } from 'next/navigation.js'
import { useQueryState } from 'next-usequerystate'

export default function Page() {
  const [name, setName] = useQueryState('name')
  return <p>{typeof redirect}</p>
}
