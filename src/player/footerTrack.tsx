
import { AlbumProps } from "./albumData"

const Footer = ({ album }: { album: AlbumProps }) => {

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-5 h-40 leading-5">
            <span className="hover:text-green-400">{album.date}</span><br/>
            <span className="hover:text-green-400 text-xs">©{album.year_date} {album.name}</span><br/>
            <span className='hover:text-green-400 flex justify-end pr-1'>v1.5.0</span>

        </div>
    )
}

export default Footer