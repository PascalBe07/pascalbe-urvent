export interface IEvent {
  name: string;
  description: string;
  imageUrl: string;
  source: string;
  date: string;
  location: ILocation;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
