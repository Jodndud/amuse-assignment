import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { devicesState } from '@/recoil/devicesState'

export function useRandomDeviceStatus() {
  const setDevices = useSetRecoilState(devicesState)

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prev) => {
        const randomIndex = Math.floor(Math.random() * prev.length)
        
        const target = prev[randomIndex]
        const newStatus = target.status === 'online' ? 'offline' : 'online'

        return prev.map((device, index) =>
          index === randomIndex
            ? { ...device, status: newStatus }
            : device
        )
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [setDevices])
}
