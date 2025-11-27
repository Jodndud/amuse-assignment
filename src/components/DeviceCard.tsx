import type { Device } from "@/types/Device";
import styled from "styled-components";
import { DEVICE_TYPE_LABEL } from '@/recoil/devicesState'

export default function DeviceCard({ device }: { device: Device }) {
  const imageSrc = {
    d1: "/src/assets/light.png",
    d2: "/src/assets/ac.png",
    d3: "/src/assets/lock.png",
  }[device.id];
  
  const typeLabel = DEVICE_TYPE_LABEL[device.type] ?? device.type

  return (
    <Card>
        <Icon src={imageSrc} alt={device.name} />
        <Title>{device.name}</Title>

        <DetailWrapper>
          <Type>타입: {typeLabel}</Type>
          <Status>상태: {device.status}</Status>
        </DetailWrapper>

        {device.type === "light" && (
            <ToggleButton $on={device.state.power == 'on'}>
                <Circle $on={device.state.power == 'on'} />
            </ToggleButton>
        )}
    </Card>
  );
}

const Card = styled.div`
    position: relative;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #eee;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 100%;
`;

const Icon = styled.img`
    width: 100px;
    object-fit: contain;
`;

const Title = styled.div`
    background: #727272;
    font-size: 14px;
    color: #fff;
    width: fit-content;
    padding: 6px 18px;
    border-radius: 16px;
`;

const DetailWrapper = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Type = styled.p`
`;

const Status = styled.span`
`;

const ToggleButton = styled.button<{ $on: boolean }>`
    position: absolute;
    top:20px;
    right:20px;
    width: 40px;
    height: 20px;
    background: ${(props) => (props.$on ? "#4caf50" : "#ccc")};
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

const Circle = styled.div<{ $on: boolean }>`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.$on ? "23px" : "2px")};
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  transition: all 0.5s;
`;
