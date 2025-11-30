import { useRecoilState } from "recoil";
import { devicesState } from "@/recoil/devicesState";

export function useToggleDevicePower() {
  const [_, setDevices] = useRecoilState(devicesState);

  const togglePower = (deviceId: string) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === deviceId
          ? {
              ...device,
              state: {
                ...device.state,
                power: device.state.power === "on" ? "off" : "on",
              },
            }
          : device
      )
    );
  };

  return { togglePower };
}
