
function LoadingPlaceholder(){
    return(
      <>
              <div className="relative bg-gradient-to-b pt-2 mb-4 from-slate-700 via-black to-black h-80 overflow-hidden">
              <div className="inline-flex">
        <div
            className="h-52 cursor-pointer sm:h-56 sm:w-56 w-48 bg-slate-800 animate-pulse ml-4 rounded-lg border-1 shadow-md "
          ></div>
  
          <div className="absolute font-semibold bg-slate-800 animate-pulse ml-60 h-10 sm:w-30 w-20 rounded-xl sm:ml-72 mt-10 "></div>
          <div className="absolute bg-slate-800 text-green-600 text-center justify-center pt-2 animate-pulse ml-60 h-10 sm:w-60 w-40 rounded-xl mt-[89px] sm:ml-72">
            {/* Album name */}Loading API..
          </div>
          <div className="absolute bg-slate-800 h-6 w-18 rounded-xl animate-pulse sm:ml-72 ml-60 mt-36 ">
             {/* Artist name */}
          </div>
          <div className="absolute bg-slate-800 w-13 h-6 animate-pulse rounded-xl sm:ml-92 ml-80 mt-36 ">
             
          </div>
          <div className="absolute bg-slate-800 w-10 h-6 animate-pulse hidden sm:block rounded-xl sm:ml-[429px] ml-95 mt-36 ">
             
             </div>
        </div>
  
        <main className="relative">
          <div className="inline-flex h-16 border-4 rounded-full animate-pulse border-slate-700 bg-slate-700 w-16 m-4">
              <span className="text-black hover:cursor-pointer select-none">
              </span>
          </div>
  
            <span className={`absolute mt-6 left-24 top-[-9px] h-16 w-16 rounded-3xl bg-slate-700 animate-pulse`}>
              {/* Save */}
            </span>
  
            <span className="absolute mt-6 left-45 top-[-9px] h-16 w-16 rounded-xl bg-slate-700 animate-pulse">
            </span>
  
          <span title="Get new album"
          className=" absolute mt-6 left-57 cursor-pointer rounded-2xl bg-slate-700 animate-pulse">
          <span className="material-symbols-outlined text-green-500 hover:animate-spin">
            {/* Generate */}
            </span>
          </span>
  
  
          <span className="absolute right-2 mt-11 mr-2 w-10 h-10 rounded-full bg-slate-700 animate-pulse hover:cursor-pointer select-none">
          </span>
            </main>
            </div>
            <div className="h-6 bg-black relative">
            <span className='absolute animate-pulse w-5 h-5 rounded-2xl bg-slate-700 left-5'></span>
            <span className='absolute animate-pulse w-10 h-5 rounded-2xl bg-slate-700 left-14'></span>
            <span className='absolute animate-pulse w-10 h-5 rounded-2xl bg-slate-700 right-[36%]'></span>
            <span className="absolute animate-pulse w-10 h-5 rounded-2xl bg-slate-700 right-[10%] top-1/2 transform -translate-y-1/2"></span>
    </div>
      <ol className="list-disc list-outside marker:text-slate-700 pr-2 pl-5 ml-1 border-4 border-black bg-black">
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
          <li
            className="rounded-md bg-[hsl(215,28%,14%)] mb-2 py-2 pr-2 pl-4 h-11 relative">
            <span className="ml-1 animate-pulse w-30 sm:w-40 h-6 bg-slate-700 rounded-xl inline-block max-w-[200px] sm:max-w-[500px] truncate"></span>
            <span className="absolute right-[35%] w-20 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
            <span className="absolute right-[10%] sm:w-20 w-15 h-6 bg-slate-700 rounded-xl animate-pulse"></span>
          </li>
    </ol>
      </>
    )
}

export default LoadingPlaceholder