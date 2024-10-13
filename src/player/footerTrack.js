import React from 'react';

function Footer(props){

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-3 leading-4">
            {/* // upload date */}
            <span className="">{props.date} {props.year}</span><br/>
            {/* copyright rights */}
            <span className="text-xs">©{props.year} {props.label}</span>
        </div>
    )
}

export default Footer