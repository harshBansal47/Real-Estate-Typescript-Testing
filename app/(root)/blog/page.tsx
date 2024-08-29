import dynamic from "next/dynamic";
import BlogV1 from '@/components/blogs';
import { Metadata } from "next";

const metadata:Metadata = {
    title: 'Blogs || AppName',
  description:
    'Real Estate Description',
}

 function Blog(){
    return(<>
    <BlogV1/>
    </>)
}


export default dynamic(() => Promise.resolve(Blog), { ssr: false });