import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { devicesState } from '@/recoil/devicesState'

export function useGetDevices() {
  const [devices, setDevices] = useRecoilState(devicesState);

  useEffect(() => {
    if (devices.length > 0) return;

    async function load() {
      const res = await fetch('/api/devices')
      const data = await res.json()
      setDevices(data)
    }

    load()
  }, [setDevices])
}

export function useGetDeviceById(deviceId?: string) {
  const [devices, setDevices] = useRecoilState(devicesState)
  console.log("useEffect 전")
  const device = devices.find((d) => d.id === deviceId)
  
  useEffect(() => {
    console.log("useEffect 후")
    if (device) {
      console.log("디바이스 있음");
      return;
    }

    async function load() {
      const res = await fetch(`/api/devices/${deviceId}`)
      const data = await res.json()

      console.log("load함수");

      setDevices((prev) =>
        prev.some((d) => d.id === deviceId)
          ? prev.map((d) => (d.id === deviceId ? data : d))
          : [...prev, data]
      )
    }

    load()
  }, [device, setDevices])

  return { device }
}