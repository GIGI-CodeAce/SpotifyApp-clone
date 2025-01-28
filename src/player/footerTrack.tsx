import React from 'react';

interface footerProps{
    date: string,
    year: number,
    label: string,
}

function Footer(props: footerProps){

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