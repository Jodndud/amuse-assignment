import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { devicesState } from "@/recoil/devicesState";
import type { Device } from "@/types/Device";

export default function MyDevices() {
  const devices = useRecoilValue<Device[]>(devicesState);

  return (
    <Wrapper>
      {devices.map((device) => (
        <Link key={device.id} to={`/device/${device.id}`}>
          <Item key={device.id}>
            <IconBox>
              <Icon src={device.imageUrl} alt={device.name} />
              <StatusDot $status={device.status} />
            </IconBox>

            <Info>
              <Name>{device.name}</Name>
            </Info>
          </Item>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background: #e9f1ff;
`;

const Icon = styled.img`
  width: 100%;
  object-fit: contain;
`;

const StatusDot = styled.span<{ $status: string }>`
  width: 12px;
  height: 12px;
  position: absolute;
  top: -4px;
  right: -5px;
  border-radius: 50%;
  background-color: ${({ $status }) =>
    $status === "online" ? "#22c55e" : "#ef4444"};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Name = styled.span`
  font-size: 14px;
  color: #222;
`;
