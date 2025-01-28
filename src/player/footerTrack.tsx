import React from 'react';
import { AlbumProps } from './album';


function Footer(props: AlbumProps){

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-3 h-40 leading-4">
            {/* // upload date */}
            <span className="">{props.date} {props.year}</span><br/>
            {/* copyright rights */}
            <span className="text-xs">©{props.year} {props.label}</span>
        </div>
    )
}

export default Footer