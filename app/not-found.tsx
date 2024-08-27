import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import NotFoundElement from "@/components/404/index";


export const metadata:Metadata={
    title: "404 Not Found || Real Estate Website",
  description: "Real Estates Trading Helper & Support",
}

function NotFound() {
    return (<>
    <NotFoundElement/>
    </>)
}


export default dynamic(() => Promise.resolve(NotFound), { ssr: false })