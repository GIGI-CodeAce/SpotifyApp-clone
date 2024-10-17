
function getTrackList() {
    let songCount = 0;

    const trackList = [
        { name: 'Cmon', id: songCount++, 
        duration: '4:01', plays: 316977 },
        { name: 'Morning mudd', id: songCount++,
        duration: '3:69', plays: 690000 },
        { name: 'Got rich', id: songCount++, 
        duration: '2:28', plays: 16977 },
        { name: 'Let ya know', id: songCount++, 
        duration: '5:16', plays: 16977 },
        { name: 'Stayed the same', id: songCount++, 
        duration: '3:09', plays: 1116977 },
        { name: 'Get busy', id: songCount++, 
        duration: '4:59', plays: 16977 },
    ];

    const AlbumInfo = [
        {
            name: 'I AM STILL WATER',
            artist: 'Playboi carti',
            album: true,
            date: [7, ' Nov'],
            year: 2024,
            label: '00pium',
            songs: songCount
        }
    ]

    return{
        AlbumInfo,
        trackList,
    }
}

export default getTrackList;
