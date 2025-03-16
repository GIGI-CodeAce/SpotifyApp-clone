function NavigationBar() {
    return (
        <nav className="flex items-center justify-between p-2 bg-slate-700">
            <div className="text-gray-400 hover:text-white active:text-red-300 cursor-pointer bg-black p-[10px] pb-1 pt-2 rounded-[50%]">
                <span
                    className="material-symbols-outlined select-none"
                    title="Home"
                    aria-label="Home"
                >
                    home
                </span>
            </div>

            <div className="relative w-1/2 max-w-[500px] min-w-[270px] mx-auto sm:scale-100 scale-90">
                <span
                    className="material-symbols-outlined absolute left-3 top-1/2 transform select-none -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                >
                    search
                </span>

                <input
                    type="text"
                    placeholder="What do you want to play?"
                    className="w-full pl-10 py-2 border border-gray-600 rounded-xl text-base bg-black text-white placeholder-gray-400 focus:outline-none transition-all hover:border-white focus:border-lime-500"
                    aria-label="Search for games"
                />

                <abbr title="Folders">
                <span
                    className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 select-none hover:text-white active:text-red-300  cursor-pointer"
                    title="Folders"
                    aria-label="Folders"
                >
                    folder
                </span>
                </abbr>
            </div>

            <div className=" text-gray-400 hover:text-white active:text-red-300  overflow-hidden cursor-pointer select-none bg-black p-[10px] pb-1 pt-2 rounded-[50%]">
            <span className="material-symbols-outlined" title="Account">
            person
            </span>
            </div>
        </nav>
    );
}

export default NavigationBar;