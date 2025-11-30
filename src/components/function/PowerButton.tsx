import styled from "styled-components";
import { useToggleDevicePower } from "@/hooks/useToggleDevicePower";

interface PowerButtonProps {
  deviceId?: string;
  power?: string;
}

export default function PowerButton({ deviceId, power }: PowerButtonProps) {
  const { togglePower } = useToggleDevicePower();

  const handleClick = () => {
    if (!deviceId) return;
    togglePower(deviceId);
  };

  return (
    <IconButton
      $on={power === "on"}
      onClick={handleClick}
      aria-label={power === "on" ? "전원 끄기" : "전원 켜기"}
    />
  );
}

const IconButton = styled.div<{ $on: boolean }>`
  position: absolute;
  top: -26px;
  right: 20px;

  background: #fafafa;
  background-color: ${({ $on }) => ($on ? "#225EA2" : "#fafafa")};
  background-image: ${({ $on }) =>
    $on
      ? "url('/images/power-btn-on.svg')"
      : "url('/images/power-btn-off.svg')"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px 28px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 3px 1px #00000013;

  @media (min-width: 768px) {
    right: 40px;
  }

  @media (min-width: 1400px) {
    right: 0;
  }
`;
