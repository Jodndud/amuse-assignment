import { atom, selectorFamily } from 'recoil'
import type { Device } from '@/types/Device'

export const devicesState = atom<Device[]>({
  key: 'devicesState',
  default: [],
})

// 상세페이지 조회
export const deviceByIdState = selectorFamily<Device | undefined, string>({
  key: 'deviceByIdState',
  get:
    (id: string) =>
    ({ get }) => {
      const devices = get(devicesState)
      return devices.find((d) => d.id === id)
    },
})

// 타입 한글 매핑
export const DEVICE_TYPE_LABEL: Record<string, string> = {
  light: '조명',
  ac: '에어컨',
  lock: '도어락',
};

// 실시간 상태
export const DEVICE_STATUS_LABEL: Record<string, string> = {
    offline: '',
    online: ''
};