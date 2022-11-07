import { Icon } from "../../styles/Sidebar.styled";
import home from "../../../public/icons/home.svg";
import discover from "../../../public/icons/discover.svg";
import library from "../../../public/icons/library.svg";
import favorite from "../../../public/icons/favorite.svg";
import recentplayed from "../../../public/icons/recentplayed.svg";
import createplaylist from "../../../public/icons/createplaylist.svg";
import playlist from "../../../public/icons/playlist.svg"

export const nav = [
    {
        to: '/home',
        name: 'Home',
        icon: <Icon src={home} alt='home-icon'/>,
    },
    {
        to: '/discover',
        name: 'Discover',
        icon: <Icon src={discover} alt='discover-icon'/>,
    },
    {
        to: '/library',
        name: 'Your Library',
        icon: <Icon src={library} alt='library-icon'/>,
    },
    {
        to: '/favorite',
        name: 'Liked Songs',
        icon: <Icon src={favorite} alt='favorite-icon'/>,
    },
    {
        to: '/recent',
        name: 'Recently Played',
        icon: <Icon src={recentplayed} alt='recentplayed-icon'/>,
    },
    {
        to: '/create-playlist',
        name: 'Create Playlist',
        icon: <Icon src={createplaylist} alt='createplaylist-icon'/>,
    },
    {
        to: '/playlist',
        name: 'My Playlists',
        icon: <Icon src={playlist} alt='playlist-icon'/>,
    }
]

export const secondaryNav = [
    {
        to: '/riffs',
        name: 'Riffs & Runs'
    },
    {
        to: '/african',
        name: 'African Heat'
    },
    {
        to: '/gidi',
        name: 'Gidi Nights'
    },
    {
        to: '/running',
        name: 'Running out of Playlist na....'
    },
    {
        to: '/saturday',
        name: 'Saturday was a Good Day'
    },
    {
        to: '/gidi',
        name: 'Gidi Nights'
    },
    {
        to: '/riffs',
        name: 'Riffs & Runs'
    },
    {
        to: '/african',
        name: 'African Heat'
    },
    {
        to: '/gidi',
        name: 'Gidi Nights'
    },
    {
        to: '/running',
        name: 'Running out of Playlist na....'
    },
    {
        to: '/saturday',
        name: 'Saturday was a Good Day'
    },
    {
        to: '/gidi',
        name: 'Gidi Nights'
    },
    {
        to: '/riffs',
        name: 'Riffs & Runs'
    },
    {
        to: '/african',
        name: 'African Heat'
    },
    {
        to: '/gidi',
        name: 'Gidi Nights'
    }
]