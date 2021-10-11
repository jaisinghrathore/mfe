import React,{useEffect,useRef} from 'react';
import {mount} from "auth/authIndex";
import { useHistory } from 'react-router-dom';

export default function AuthApp() {
    const ref = useRef(null);
    
    const history = useHistory();

    useEffect(()=>{
        const {onParentNavigate}=mount(ref.current,{
            initialPath : history.location.pathname,
            onNavigate: ({pathname: nextPathname })=> {
                history.push(nextPathname);
            }
        })
    history.listen(onParentNavigate);
    },[])



    return <div ref={ref}></div>;
}
