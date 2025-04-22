
function SongOverview(){

    return(
        <div className="fixed w-full h-14 text-white border-2 border-b-0 border-lime-500
 bg-black px-4 bottom-0 z-10 flex justify-between items-center rounded-t-xl">
        <span>name • artist</span>
        <span className="material-symbols-outlined select-none hover:cursor-pointer">skip_previous</span>
        <span className="material-symbols-outlined select-none hover:cursor-pointer text-lime-500">play_arrow</span>
        <span className="material-symbols-outlined select-none hover:cursor-pointer ">skip_next</span>
        <div>
        <span className="material-symbols-outlined select-none hover:cursor-pointer">volume_up</span>
        <progress className="w-16 ml-[4px] mb-[5px] h-3" value="90" max="100">32%</progress>
        </div>
        </div>
    )
}

export default SongOverview