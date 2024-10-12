
function Album(){

    return(
        <div className="bg-stone-950 h-80">
        <div className="inline-flex">
            {/* photo */}
            <div className="h-56 w-60 border-2 ml-4 rounded-lg shadow-md shadow-white"></div>
            {/* song title */}
            <div className="absolute ml-72 mt-10 w-6 h-6 text-white">Album</div>
            <div className="absolute ml-72 mt-20 text-3xl sm:text-5xl text-white">Baby on baby</div>
            <div className="absolute ml-72 mt-36 text-xl text-white">Da baby</div>
        </div>
        <br/>
        <main className="relative">
        <div className="inline-flex h-16 border-4 rounded-[50%]
         border-green-500 bg-green-500 w-16 m-4">
        <span className="text-black hover:cursor-pointer select-none">
  <span className="material-symbols-outlined text-[58px]">
            play_arrow
        </span>
        </span>
        </div>
        <span className="text-white absolute  mt-6 left-12 hover:cursor-pointer select-none">
        <span className="material-symbols-outlined text-[50px] absolute left-11">
            shuffle
        </span>
        </span>
        <span className="text-white absolute mt-6 left-40 hover:cursor-pointer select-none">
        <span class="material-symbols-outlined text-[50px]">
        add_circle
        </span>
        </span>
        <span className="text-white absolute right-2 mt-11 mr-2 hover:cursor-pointer select-none">
        <span class="material-symbols-outlined text-3xl">
        list
        </span>
        </span>
        </main>
        </div>
    )
}

export default Album