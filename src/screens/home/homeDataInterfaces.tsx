export interface IRoom {
  roomId: number;
  name: string;
}

export interface ILocation {
  locationId: number;
  label: string;
  rooms?: IRoom[];
}

export interface IDevices {
  id: number;
  image: string;
  name: string;
  online: boolean;
  roomId: number;
  dynamicData?: {
    id: number;
    channelName: string;
    on: boolean;
  }[];
  staticData?: {
    id: number;
    label: string;
    value: number;
    unit: string;
  }[];
}

//temporary data
export const available_locations = [
  {
    locationId: 1,
    label: 'My Home',
    rooms: [
      {
        roomId: 2,
        name: 'Room2',
      },
      {
        roomId: 1,
        name: 'Room1',
      },
      {
        roomId: 3,
        name: 'Livingroom',
      },
      {
        roomId: 4,
        name: 'Office',
      },
    ],
  },
  {locationId: 2, label: 'Office'},
  {locationId: 3, label: 'Chalet'},
  {locationId: 4, label: 'Storage'},
];

export const selected_location_devices = [
  {
    id: 1,
    image: 'url or from assets',
    name: 'Channel1',
    online: false,
    roomId: 1,
    dynamicData: [{id: 1, channelName: '', on: false}],
  },
  {
    id: 2,
    image: 'url or from assets',
    name: 'Channel2',
    online: false,
    roomId: 2,
    dynamicData: [{id: 2, channelName: '', on: false}],
  },
  {
    id: 3,
    image: 'url or from assets',
    name: 'S60TPF',
    online: true,
    roomId: 3,
    staticData: [
      {
        id: 1,
        label: 'Today',
        value: 0.0,
        unit: 'kWh',
      },
      {
        id: 2,
        label: 'Current Month',
        value: 34.44,
        unit: 'kWh',
      },
      {
        id: 3,
        label: 'Power',
        value: 0,
        unit: 'W',
      },
    ],
    dynamicData: [{id: 1, channelName: '', on: true}],
  },
  {
    id: 4,
    image: 'url or from assets',
    name: 'MiniR4M',
    online: false,
    roomId: 2,
    dynamicData: [{id: 2, channelName: '', on: false}],
  },
  {
    id: 5,
    image: 'url or from assets',
    name: 'NSPanel',
    online: false,
    roomId: 3,
    dynamicData: [
      {id: 2, channelName: 'Channel1', on: false},
      {id: 3, channelName: 'Channel2', on: false},
    ],
  },
];
