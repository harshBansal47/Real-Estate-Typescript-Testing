"use client"
import Wrapper from "@/components/layout/Wrapper";
import { Metadata } from "next";
import HomeMain from '@/components/home/index';
import { Provider } from "react-redux";
import {store} from "@/store/store"
import Navbar from "@/components/commons/Navbar/Navbar";


export default function HomePage(){
   return(
    <Wrapper>
        <Provider store={store}>
            <Navbar/>
            <HomeMain/>
        </Provider>
    </Wrapper>
   )
}