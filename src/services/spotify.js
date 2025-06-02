// This file is kept for future use if needed
// Currently using direct Spotify embeds in MusicPage.jsx

const CLIENT_ID = 'bc5d511449fd4dd98dabf11542886698'; // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://localhost:5173/music'; // Updated to use HTTPS
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const ARTIST_ID = '56ivvjwmCNBuf3aFP9kewk'; // LXSHH's Spotify Artist ID
const SCOPES = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-read'
];

export const loginToSpotify = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join('%20')}`;
};

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const fetchArtistProfile = async (token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching artist profile:', error);
        return null;
    }
};

export const fetchArtistTopTracks = async (token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=US`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.tracks;
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        return [];
    }
};

export const fetchArtistAlbums = async (token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching albums:', error);
        return [];
    }
};

export const fetchArtistRelatedArtists = async (token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/related-artists`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.artists;
    } catch (error) {
        console.error('Error fetching related artists:', error);
        return [];
    }
};

export const fetchPlaylists = async (token) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        return [];
    }
};

export const fetchPlaylistTracks = async (token, playlistId) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching playlist tracks:', error);
        return [];
    }
}; 