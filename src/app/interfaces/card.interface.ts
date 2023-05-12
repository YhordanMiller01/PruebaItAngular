export interface CardsData {
  total:     number;
  totalHits: number;
}

export interface Card {
  id:              number;
  pageURL:         string;
  type:            Type;
  tags:            string;
  previewURL:      string;
  previewWidth:    number;
  previewHeight:   number;
  webformatURL:    string;
  webformatWidth:  number;
  webformatHeight: number;
  largeImageURL:   string;
  imageWidth:      number;
  imageHeight:     number;
  imageSize:       number;
  views:           number;
  downloads:       number;
  collections:     number;
  likes:           number;
  comments:        number;
  user_id:         number;
  user:            string;
  userImageURL:    string;
}

export enum Type {
  Photo = "photo",
}
