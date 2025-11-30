import { useRecoilState } from "recoil";
import { devicesState } from "@/recoil/devicesState";

export function useToggleDeviceStatus() {
  const [_, setDevices] = useRecoilState(devicesState);

  const toggleStatus = (deviceId: string) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === deviceId
          ? {
              ...device,
              status: device.status === "online" ? "offline" : "online",
            }
          : device
      )
    );
  };

  return { toggleStatus };
}
