import React from 'react';
import { useState } from 'react';


const NestedFolder = ({explorer}) => {

    const [expand, setExpand] = useState(false)

    if(explorer.isFolder){
        return (
            <div>
                <div onClick={() => setExpand(!expand)}>
                    {explorer.name}
                    <br/>
                </div>
                <div style={{display: expand ? "block" : "none", padding:"15px"}}>
                    {explorer.directory.map((val,i) => {
                        return <NestedFolder explorer={val} />
                    })}
                </div>
            </div>
        )
    }
    else{
        return <span>{explorer.name}<br /></span>
    }
    
}
export default NestedFolder;