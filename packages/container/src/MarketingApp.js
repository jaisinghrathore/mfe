import React,{useEffect,useRef} from 'react';
import {mount} from "marketing/marketingIndex";

export default function MarketingApp() {
    const ref = useRef(null);
    

    useEffect(()=>{
        mount(ref.current)
    },[])


    return <div ref={ref}></div>;
}
