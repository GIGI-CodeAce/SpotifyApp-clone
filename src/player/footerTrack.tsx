import React from 'react';
import { AlbumProps } from './album';


function Footer(props: AlbumProps){

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-3 h-40 leading-4">
            <span className="">{props.date} {props.year}</span><br/>

            <span className="text-xs">©{props.year} {props.label}</span>
            <span className='flex justify-end pr-1'>v1.2.0</span>

        </div>
    )
}

export default Footer