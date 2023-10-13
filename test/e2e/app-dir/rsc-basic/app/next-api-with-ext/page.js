import { redirect } from 'next/navigation.js'

export default function page() {
  return <p>{typeof redirect}</p>
}
