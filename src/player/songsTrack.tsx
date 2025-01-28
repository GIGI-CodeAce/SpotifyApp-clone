import React, { useState } from 'react';

interface TrackProps{
  name: string,
  id: null, 
  duration: string,
  plays: number,
  onClick: any,
}

function Track(props: TrackProps) {
  const liStyle = " rounded-md odd:bg-gray-800 text-white even:bg-gray-700 py-2 px-2 active:bg-gray-700 relative h-11";
  const [hoveredSongid, setHoveredSongid] = useState(null);

  const handleMouseEnter = () => {
    setHoveredSongid(props.id);
  };

  const handleMouseLeave = () => {
    setHoveredSongid(null);
  };

  const playIcon = <span className="material-symbols-outlined text-lg">play_arrow</span>;

  return (
    <div>
      <ol className="hover:cursor-pointer border-4 border-black bg-black">
        <li
          onClick={props.onClick}
          className={liStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <span className="text-green-600 font-bold mr-5 ml-2 select-none">
            {hoveredSongid === props.id ? playIcon : `${props.id + 1} `}
          </span>
          {props.name}
          <span className='absolute right-[10%]'>{props.duration}</span>
          <span className='absolute right-[35%]'>{props.plays}</span>
        </li>
      </ol>
    </div>
  );
}

export default Track;