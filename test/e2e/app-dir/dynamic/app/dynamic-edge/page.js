import dynamic from 'next/dynamic'

const DynamicSSRFalse = dynamic(/*@ PURE */ () => import('./ssr-false'), {
  ssr: false,
})

export default function page() {
  return (
    <div>
      <DynamicSSRFalse />
      <p id="content">dynamic-edge</p>
    </div>
  )
}

export const runtime = 'edge'
