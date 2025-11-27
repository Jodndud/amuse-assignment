import { atom, selectorFamily } from 'recoil'
import mockData from '@/data/mockData.json'
import type { Device } from '@/types/Device'

export const devicesState = atom<Device[]>({
  key: 'devicesState',
  default: mockData.devices,
})

export const deviceByIdState = selectorFamily<Device | undefined, string>({
  key: 'deviceByIdState',
  get:
    (id: string) =>
    ({ get }) => {
      const devices = get(devicesState)
      return devices.find((d) => d.id === id)
    },
})
