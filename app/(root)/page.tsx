"use client"
import Wrapper from "@/components/layout/Wrapper";
import { Metadata } from "next";
import HomeMain from '@/components/home/index';
import { Provider } from "react-redux";
import {store} from "@/store/store"


export default function HomePage(){
   return(
    <Wrapper>
        <Provider store={store}>
            <HomeMain/>
        </Provider>
    </Wrapper>
   )
}