import React from 'react'
import {mount} from "dashboard/dashboardIndex" 

export default function dashboardApp() {
    const ref = React.useRef(null);

    React.useEffect(()=>{
            mount(ref.current);
    },[])
    return (
        <div ref={ref}>
            
        </div>
    )
}
