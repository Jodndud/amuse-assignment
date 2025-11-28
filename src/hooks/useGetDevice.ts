import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { devicesState } from '@/recoil/devicesState'

export function useGetDevices() {
  const setDevices = useSetRecoilState(devicesState)

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/devices')
      const data = await res.json()
      console.log(data)
      setDevices(data)
    }

    load()
  }, [setDevices])
}
