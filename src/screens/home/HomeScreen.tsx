import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {homeStyles} from './homeStyles';
import {ILocation, IDevices, IRoom} from './homeDataInterfaces';

const select_location_icon = require('../../assets/select-location.png');
const add_device = require('../../assets/add-device.png');
const grid_icon = require('../../assets/grid.png');
const more_icon = require('../../assets/more.png');
const online_icon = require('../../assets/connected.png');
const offline_icon = require('../../assets/offline.png');
const offline_i_icon = require('../../assets/offline-i.png');

//Import temporary data
import {
  available_locations,
  selected_location_devices,
} from './homeDataInterfaces';

//Prop Types
type HeaderProps = {
  location: ILocation[];
  locationSelected: ILocation | null;
  handleSelectLocation: (location: ILocation) => void;
};
type RoomNavElementProps = {
  room: IRoom;
  roomSelectedId: number | null;
  handleSelectRoom: (roomId: number) => void;
};
type dynamicData = {
  id: number;
  channelName: string;
  on: boolean;
};

//Separate components for better visibility and reusability
const Header = ({
  location,
  locationSelected,
  handleSelectLocation,
}: HeaderProps) => {
  const [openLocationList, setOpenLocationList] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  return (
    <>
      <View style={homeStyles.locationHeader}>
        <View style={homeStyles.locationContainer}>
          <Text style={homeStyles.locationText}>
            {locationSelected?.label || ''}
          </Text>

          {openLocationList ? (
            <TouchableOpacity
              onPress={() => setOpenLocationList(false)}
              style={homeStyles.selectLocationArea}>
              <Image
                source={select_location_icon}
                style={homeStyles.select_location_icon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={homeStyles.selectLocationArea}
              onPress={() => setOpenLocationList(true)}>
              <Image
                source={select_location_icon}
                style={homeStyles.select_location_icon}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={() => setOpenAddModal(true)}>
          <Image source={add_device} style={homeStyles.add_device} />
        </TouchableOpacity>
      </View>
      {openLocationList && (
        <View style={homeStyles.locationListContainer}>
          {location?.map((location, index) => (
            <TouchableOpacity
              onPress={() => handleSelectLocation(location)}
              style={homeStyles.locationListItem}
              key={index}>
              <Text style={homeStyles.locationListText}>{location.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Modal
        isVisible={openAddModal}
        backdropOpacity={0.4}
        animationIn="slideInUp"
        animationInTiming={800}
        animationOutTiming={800}
        animationOut="slideOutDown"
        onBackButtonPress={() => setOpenAddModal(false)}
        onBackdropPress={() => setOpenAddModal(false)}
        style={homeStyles.modalBackground}>
        <View style={homeStyles.addModalContainer}>
          <Text style={homeStyles.modalTitle}>Add Device</Text>
        </View>
      </Modal>
    </>
  );
};

const RoomNavElement = ({
  room,
  roomSelectedId,
  handleSelectRoom,
}: RoomNavElementProps) => {
  const checkSelection = roomSelectedId == room.roomId ? true : false;
  return (
    <TouchableOpacity
      key={room.roomId}
      style={[
        homeStyles.roomItem,
        checkSelection ? homeStyles.selectedRoomItem : '',
      ]}
      onPress={() => handleSelectRoom(room.roomId)}>
      <Text
        style={[
          homeStyles.roomName,
          checkSelection ? homeStyles.selectedRoomName : '',
        ]}>
        {room.name}
      </Text>
    </TouchableOpacity>
  );
};

const DeviceElement = ({device}: {device: IDevices}) => {
  const [online, setOnline] = useState<boolean>(device.online);

  const SwitchElement = ({
    data,
    online,
    single,
  }: {
    data: dynamicData;
    online: boolean;
    single: boolean;
  }) => {
    const [isOn, setIsOn] = useState<boolean>(data.on);
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };

    return (
      <View>
        <View style={[homeStyles.switch, isOn ? homeStyles.switchOn : null]}>
          <TouchableOpacity
            style={[
              homeStyles.switchCircle,
              isOn ? homeStyles.switchCircleOn : null,
            ]}
            onPress={toggleSwitch}
            disabled={!online}></TouchableOpacity>
        </View>
        {!single && (
          <Text style={homeStyles.channelName}>{data.channelName}</Text>
        )}
      </View>
    );
  };

  return (
    <View
      style={[
        homeStyles.deviceItem,
        online ? homeStyles.onlineDeviceItem : '',
      ]}>
      <View style={homeStyles.connectionImage}>
        {online ? (
          <Image source={online_icon} style={homeStyles.onlineIcon} />
        ) : (
          <Image source={offline_icon} style={homeStyles.onlineIcon} />
        )}
      </View>

      <View style={homeStyles.deviceBasicData}>
        <View
          style={[
            homeStyles.deviceImage,
            online ? homeStyles.onlineDeviceImage : '',
          ]}></View>
        <View style={homeStyles.dataContainer1}>
          <Text
            style={[
              homeStyles.deviceName,
              online ? homeStyles.onlineDeviceName : '',
            ]}>
            {device.name}
          </Text>
          <View style={homeStyles.statusBox}>
            {online ? (
              <>
                <View style={homeStyles.onlineDot}></View>
                <Text style={homeStyles.statusText}>ON</Text>
              </>
            ) : (
              <>
                <Image source={offline_i_icon} style={homeStyles.iIcon} />
                <Text style={homeStyles.statusText}>Offline</Text>
              </>
            )}
          </View>
        </View>
        {device?.dynamicData?.length === 1 ? (
          <View style={homeStyles.singleSwitch}>
            <SwitchElement
              data={device.dynamicData[0]}
              online={online}
              single={true}
            />
          </View>
        ) : null}
      </View>
      {device.staticData && (
        <View style={homeStyles.staticDataContainer}>
          {device.staticData.map((data, index) => (
            <View key={index} style={homeStyles.staticData}>
              <Text style={homeStyles.staticDataValue}>
                {data.value}
                {data.unit}
              </Text>
              <Text style={homeStyles.staticDataLabel}>{data.label}</Text>
            </View>
          ))}
        </View>
      )}

      {device?.dynamicData && device.dynamicData.length > 1 ? (
        <View style={homeStyles.manySwitches}>
          {device.dynamicData.map((dataItem, index) => (
            <SwitchElement
              key={index}
              data={dataItem}
              online={online}
              single={false}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

// Main page component
const HomeScreen = () => {
  const [location, setLocation] = useState<ILocation[]>([]);
  const [locationSelected, setLocationSelected] = useState<ILocation | null>(
    null,
  );

  const [roomSelectedId, setRoomSelectedId] = useState<number | null>(null);

  const [devices, setDevices] = useState<IDevices[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<IDevices[]>(devices);

  const [showRoomList, setShowRoomList] = useState<boolean>(false);

  useEffect(() => {
    //we consider that we have a GET api for the location data
    setLocation(available_locations);
    setLocationSelected(available_locations[0]);
  }, []);

  useEffect(() => {
    //we consider that we have a GET api for the devices data
    //currently no change in devices data will happen
    setDevices(selected_location_devices);
  }, [locationSelected]);

  useEffect(() => {
    setShowRoomList(false);

    if (!devices) return;

    if (roomSelectedId === 0) {
      setFilteredDevices(devices);
    } else {
      const filteredData = devices.filter(
        device => device.roomId === roomSelectedId,
      );
      setFilteredDevices(filteredData);
    }
  }, [roomSelectedId, devices]);

  const handleSelectRoom = (roomId: number) => {
    setRoomSelectedId(roomId);
  };

  const handleSelectLocation = (location: ILocation) => {
    setLocationSelected(location);
  };

  return (
    <View style={homeStyles.container}>
      <Header
        location={location}
        locationSelected={locationSelected}
        handleSelectLocation={handleSelectLocation}
      />

      <View style={homeStyles.roomsContainer}>
        <View style={homeStyles.roomNavigationBar}>
          <View style={homeStyles.roomOptionsBar}>
            {[{roomId: 0, name: 'All'}, ...(locationSelected?.rooms || [])].map(
              room => (
                <RoomNavElement
                  key={room.roomId}
                  room={room}
                  roomSelectedId={roomSelectedId}
                  handleSelectRoom={handleSelectRoom}
                />
              ),
            )}
          </View>

          <View style={homeStyles.actionIconsContainer}>
            <Image source={grid_icon} style={homeStyles.gridIcon} />

            <TouchableOpacity onPress={() => setShowRoomList(!showRoomList)}>
              <Image source={more_icon} style={homeStyles.moreIcon} />
            </TouchableOpacity>
          </View>
          {showRoomList && (
            <View style={homeStyles.roomListContainer}>
              {locationSelected?.rooms && locationSelected.rooms.length > 0 ? (
                locationSelected.rooms.map((room, index) => (
                  <TouchableOpacity
                    onPress={() => handleSelectRoom(room.roomId)}
                    style={homeStyles.roomListItem}
                    key={index}>
                    <Text style={homeStyles.roomListText}>{room.name}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={homeStyles.noRooms}>No rooms</Text>
              )}
            </View>
          )}
        </View>

        <View style={homeStyles.devicesContainer}>
          <FlatList
            data={filteredDevices}
            renderItem={({item}) => <DeviceElement device={item} />}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={
              <Text style={homeStyles.noDevices}>No devices available!</Text>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
