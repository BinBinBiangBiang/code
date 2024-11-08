// search 有核心数据，可以说只要是接口返回的数据都要建立模型

export interface SearchHotDetail{
  searchWord:string;
  score:number;
  content:string;
  source:number;
  // ?: 可选的 如果你给了就必须是字符串类型 要么不要给
  iconUrl?:string;
  alg:string;
}


export interface SearchSuggest {
  albums: SearchSuggestAlbums[];
  artists: SearchSuggestArtists[];
  songs: SearchSuggestSongs[];
  playlists: SearchSuggestPlaylists[];
  order: string[];
}
export interface SearchSuggestAlbumsArtist {
  id: number;
  name: string;
  picUrl: string;
  alias: string[];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  alia: string[];
  trans?: any;
}
export interface SearchSuggestAlbums {
  id: number;
  name: string;
  artist: SearchSuggestAlbumsArtist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
}
export interface SearchSuggestArtists {
  id: number;
  name: string;
  picUrl: string;
  alias: string[];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  transNames: string[];
  alia: string[];
  trans: string;
}
export interface SearchSuggestSongsArtists {
  id: number;
  name: string;
  picUrl?: any;
  alias: any[];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  trans?: any;
}
export interface SearchSuggestSongsAlbumArtist {
  id: number;
  name: string;
  picUrl?: any;
  alias: any[];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  trans?: any;
}
export interface SearchSuggestSongsAlbum {
  id: number;
  name: string;
  artist: SearchSuggestSongsAlbumArtist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
}
export interface SearchSuggestSongs {
  id: number;
  name: string;
  artists: SearchSuggestSongsArtists[];
  album: SearchSuggestSongsAlbum;
  duration: number;
  copyrightId: number;
  status: number;
  alias: any[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
}
export interface SearchSuggestPlaylists {
  id: number;
  name: string;
  coverImgUrl: string;
  creator?: any;
  subscribed: boolean;
  trackCount: number;
  userId: number;
  playCount: number;
  bookCount: number;
  specialType: number;
  officialTags?: any;
  action?: any;
  actionType?: any;
  description?: any;
  highQuality: boolean;
}
