

import { AlbumProps } from "./albumData"

const Footer = ({ album }: { album: AlbumProps }) => {

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-3 h-40 leading-4">
            <span className="">{album.date}</span>
            <span className="text-xs">©{album.year_date} {album.name}</span><br/>
            <span className='flex justify-end pr-1'>v1.4.5</span>

        </div>
    )
}

export default Footer