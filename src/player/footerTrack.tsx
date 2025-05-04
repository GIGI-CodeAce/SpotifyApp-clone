
import { AlbumProps } from "./albumData"

const Footer = ({ album }: { album: AlbumProps }) => {

    return(
        <div className=" text-white opacity-[40%] ml-4 mt-5 h-40 leading-5">
            <span className="hover:text-green-400">{album.date}</span><br/>
            <span className="hover:text-green-400 text-xs">©{album.year_date} {album.name}</span><br/><hr/><br/>
            <div className="leading-6 inline-grid">
            <span className='hover:text-green-400 w-[10000px]'>v1.5.0</span>
            <span className='hover:text-green-400'>Roby/GIGI</span>
            <a href="https://github.com/GIGI-CodeAce" className='hover:text-green-400'>Github</a>
            </div>
        </div>
    )
}

export default Footer