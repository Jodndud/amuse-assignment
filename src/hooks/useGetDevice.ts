import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { devicesState } from '@/recoil/devicesState'

export function useGetDevices() {
  const setDevices = useSetRecoilState(devicesState)

  useEffect(() => {
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
    if (device) return

    async function load() {
      const res = await fetch(`/api/devices/${deviceId}`)
      const data = await res.json()

      setDevices((prev) =>
        prev.map((d) => (d.id === deviceId ? data : d))
      )
    }

    load()
  }, [device, setDevices])

  return { device }
}