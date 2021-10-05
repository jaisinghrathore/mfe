import React from 'react'
import {mount as dashMount} from "dashboard/dashboardIndex" 

export default function dashboardApp() {
    const ref = React.useRef(null);

    React.useEffect(()=>{
        dashMount(ref.current);
    },[])
    return (
        <div ref={ref}></div>
    )
}
