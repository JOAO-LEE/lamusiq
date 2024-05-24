import { Album } from "../model/Album/Album";
import { Playlist } from "../model/Playlist/Playlist";
import { Track, TrackFromPlaylist } from "../model/Track/Track";

export const isAlbum = (media: Album | Playlist): media is Album => {
  return (media as Album).album_type !== undefined;
};

export const isTrackFromPlaylist = (media: Album | Array<Track> | Array<TrackFromPlaylist>): media is Array<TrackFromPlaylist> => {
  return (media as Array<TrackFromPlaylist>)[0].track !== undefined;
}
