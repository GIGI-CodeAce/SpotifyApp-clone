
function getTrackList() {
    let songCount = 0;

    const trackList = [
        { name: 'Nikes', id: songCount++, 
        duration: '5:14', plays: 339450 },
        { name: 'Ivy', id: songCount++,
        duration: '4:09', plays: 903042 },
        { name: 'Pink + White', id: songCount++, 
        duration: '2:28', plays: 506645 },
        { name: 'Be Yourself', id: songCount++, 
        duration: '1:26', plays: 83263 },
        { name: 'Solo', id: songCount++, 
        duration: '4:17', plays: 251149 },
        { name: 'Skyline To', id: songCount++, 
        duration: '3:04', plays: 118760 },
        { name: 'Self Control', id: songCount++, 
        duration: '4:09', plays: 483100 },
        { name: 'Good Guy', id: songCount++, 
        duration: '1:06', plays: 106995 },
        { name: 'Nights', id: songCount++, 
        duration: '5:07', plays: 766593 },
    ];

    const AlbumInfo = [
        {
            name: 'AN ALBUM NAME',
            artist: 'Artist',
            album: true,
            date: [7, ' Nov'],
            year: 2024,
            label: 'Label',
            songs: songCount
        }
    ]

    return{
        AlbumInfo,
        trackList,
    }
}

export default getTrackList;
