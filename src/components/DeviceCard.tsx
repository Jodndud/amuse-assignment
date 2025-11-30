import type { Device } from "@/types/Device";
import styled from "styled-components";
import { DEVICE_TYPE_LABEL } from '@/recoil/devicesState'

import { useToggleDeviceStatus } from "@/hooks/useToggleDeviceStatus";

export default function DeviceCard({ device }: { device: Device }) {  
  const typeLabel = DEVICE_TYPE_LABEL[device.type] ?? device.type
      const { toggleStatus } = useToggleDeviceStatus();
  
      const handleToggleStatus = (id: string) => {
          if (!id) return;
          toggleStatus(id);
      };

  return (
    <Card>
        <Icon src={device.imageUrl} alt={device.name} />
        <Title>{device.name}</Title>

        <DetailWrapper>
          <Type>타입: {typeLabel}</Type>
          <Status>
            상태: {device.status}
            <div
              className={`
                w-[6px] h-[6px] rounded-full absolute -right-2 top-0 
                ${device.status === "online" ? "bg-green-400" : "bg-red-500"}
              `}
            />
          </Status>
        </DetailWrapper>

        {device.type === "light" && (
            <ToggleButton
              $on={device.status== 'online'}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleStatus(device?.id)}}
            >
                <Circle $on={device.status== 'online'} />
            </ToggleButton>
        )}
    </Card>
  );
}

const Card = styled.div`
    position: relative;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 6px 1px #0000001b;
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
    white-space: nowrap;
`;

const DetailWrapper = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-top: 12px;

    @media(min-width: 768px){
      flex-direction: row;
      gap: 12px;
    }
`;

const Type = styled.p`
`;

const Status = styled.span`
  position: relative;
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
  transition: all 0.2s;
`;
