import {PolarBle} from './nativeModule';

const {
  DEVICE_FOUND,
  DEVICE_CONNECTING,
  DEVICE_CONNECTED,
  DEVICE_DISCONNECTED,
  BATTERY_LEVEL_RECEIVED,
  DIS_INFORMATION_RECEIVED,
  BLE_POWER_ON,
  BLE_POWER_OFF,
  HR_FEATURE_READY,
  FTP_FEATURE_READY,
  STREAMING_FEATURES_READY,
  HR_VALUE_RECEIVED,
} = (PolarBle?.getConstants() as Record<string, string>) ?? {};

const {
  HR,
  DEVICE_INFO,
  BATTERY_STATUS,
  POLAR_SENSOR_STREAMING,
  POLAR_FILE_TRANSFER,
  ALL_FEATURES,
} = (PolarBle?.getConstants() as Record<string, number>) ?? {};

export const Events = {
  DEVICE_FOUND,
  DEVICE_CONNECTING,
  DEVICE_CONNECTED,
  DEVICE_DISCONNECTED,
  BATTERY_LEVEL_RECEIVED,
  DIS_INFORMATION_RECEIVED,
  BLE_POWER_ON,
  BLE_POWER_OFF,
  HR_FEATURE_READY,
  FTP_FEATURE_READY,
  STREAMING_FEATURES_READY,
  HR_VALUE_RECEIVED,
};

export const Features = {
  HR,
  DEVICE_INFO,
  BATTERY_STATUS,
  POLAR_SENSOR_STREAMING,
  POLAR_FILE_TRANSFER,
  ALL_FEATURES,
};
