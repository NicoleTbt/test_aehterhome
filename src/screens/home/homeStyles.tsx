import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    marginBottom: '15%',
  },
  locationContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    color: '#555',
  },
  selectLocationArea: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectLocationIcon: {
    width: 15,
    height: 15,
  },
  selectLocationIconRotate: {
    transform: [{rotate: '180deg'}],
  },
  locationListContainer: {
    position: 'absolute',
    zIndex: 100,
    elevation: 5,
    minWidth: 130,
    minHeight: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    left: '5%',
    top: 50,
    padding: 7,
  },
  locationListItem: {
    marginBottom: 3,
    paddingVertical: 10,
  },
  locationListText: {
    fontSize: 16,
  },
  noRooms: {
    textAlign: 'center',
    marginTop: 10,
  },
  add_device: {
    width: 30,
    height: 30,
  },
  roomsContainer: {
    paddingTop: '2%',
    flex: 1,
    paddingHorizontal: '3%',
    backgroundColor: '#f6f7fb',
  },
  roomNavigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  roomOptionsBar: {
    flexDirection: 'row',
    height: '100%',
    width: '75%',
    overflow: 'hidden',
    gap: 15,
  },
  roomItem: {
    height: '100%',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  selectedRoomItem: {
    borderBottomWidth: 2,
    borderColor: '#84d5f9',
  },
  roomName: {
    fontSize: 14,
    color: '#555',
  },
  selectedRoomName: {
    fontWeight: 600,
    color: 'black',
  },
  actionIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginRight: 10,
  },
  gridIcon: {
    width: 25,
    height: 25,
  },
  moreIcon: {
    width: 25,
    height: 25,
  },
  roomListContainer: {
    position: 'absolute',
    zIndex: 100,
    elevation: 5,
    minWidth: 130,
    minHeight: 150,
    borderRadius: 5,
    right: 0,
    top: 50,
    backgroundColor: 'white',
    padding: 7,
  },
  roomListItem: {
    marginBottom: 3,
    paddingVertical: 10,
  },
  roomListText: {
    fontSize: 15,
  },
  devicesContainer: {
    marginTop: '4%',
    flex: 1,
  },
  deviceItem: {
    width: '100%',
    borderRadius: 7,
    minHeight: 80,
    backgroundColor: '#fbfbfd',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  onlineDeviceItem: {
    backgroundColor: 'white',
    elevation: 2,
  },
  connectionImage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  onlineIcon: {
    width: 13,
    height: 13,
  },
  deviceBasicData: {
    marginTop: 4,
    flexDirection: 'row',
    width: '90%',
  },
  deviceImage: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#dfdfdf',
  },
  onlineDeviceImage: {
    backgroundColor: '#f4d5f5',
  },
  dataContainer1: {
    marginLeft: 15,
  },
  deviceName: {
    fontSize: 16,
    color: '#a0a0a2',
  },
  onlineDeviceName: {
    color: '#464646',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  onlineDot: {
    width: 6,
    height: 6,
    backgroundColor: '#82d45e',
    borderRadius: 50,
  },
  iIcon: {
    width: 14,
    height: 14,
  },
  statusText: {
    fontSize: 12,
    color: '#a0a0a2',
  },
  noDevices: {
    textAlign: 'center',
    marginTop: '15%',
    color: '#888',
  },
  staticDataContainer: {
    flexDirection: 'row',
    width: '75%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    columnGap: 40,
    rowGap: 15,
  },
  staticData: {},
  staticDataValue: {
    textAlign: 'center',
    color: '#464646',
  },
  staticDataLabel: {
    textAlign: 'center',
    fontSize: 11,
    color: '#a0a0a2',
  },
  switch: {
    backgroundColor: '#ebebed',
    width: 50,
    height: 25,
    borderRadius: 15,
  },
  switchOn: {
    backgroundColor: '#d9ecfb',
    alignItems: 'flex-end',
  },
  switchCircle: {
    width: 25,
    height: 25,
    borderRadius: 50,

    backgroundColor: '#d4d4d6',
  },
  switchCircleOn: {
    backgroundColor: '#4a8fff',
  },
  singleSwitch: {
    flex: 1,
    alignItems: 'flex-end',
  },
  manySwitches: {
    flexDirection: 'row',
    width: '75%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 15,
    columnGap: 40,
    rowGap: 25,
  },
  channelName: {
    fontSize: 12,
    color: '#a0a0a2',
    marginTop: 15,
  },
  modalBackground: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 0,
  },
  addModalContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: 0,
  },
  modalTitle: {
    marginTop: 20,
    fontSize: 16,
  },
});
