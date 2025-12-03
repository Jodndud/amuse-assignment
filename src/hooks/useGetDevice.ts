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

  const device = devices.find((d) => d.id === deviceId)

  useEffect(() => {
    if (device) {
      console.log("Device found in state:", device);
      return;
    }

    async function load() {
      const res = await fetch(`/api/devices/${deviceId}`)
      const data = await res.json()

      console.log("Fetched device data:", data);

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