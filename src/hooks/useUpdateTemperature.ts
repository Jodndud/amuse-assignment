import { useRecoilState } from "recoil";
import { devicesState } from "@/recoil/devicesState";

export function useUpdateTemperature() {
  const [devices, setDevices] = useRecoilState(devicesState);

  const changeTemperature = (deviceId: string, delta: number) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === deviceId
          ? {
              ...device,
              state: {
                ...device.state,
                temperature: (device.state.temperature ?? 0) + delta,
              },
            }
          : device
      )
    );
  };

  return { changeTemperature };
}
