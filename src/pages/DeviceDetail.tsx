import { useParams  } from 'react-router-dom'
import styled from "styled-components";
import DetailHeader from "@/components/DetailHeader";
import { DEVICE_TYPE_LABEL } from '@/recoil/devicesState'

import {useGetDeviceById} from '@/hooks/useGetDevice'
import { useToggleDevicePower } from "@/hooks/useToggleDevicePower";

export default function DeviceDetail(){
    const { deviceId } = useParams<{ deviceId: string }>()
    const { device } = useGetDeviceById(deviceId)
    const typeLabel = device ? DEVICE_TYPE_LABEL[device.type] ?? device.type : ''
    const { togglePower } = useToggleDevicePower();

    const handleTogglePower = () => {
        if (!deviceId) return;
        togglePower(deviceId);
    };

    return(
        <Wrapper>
            <DetailHeader>{device?.name}</DetailHeader>

            <IconWrapper>
                <Icon src={device?.imageUrl} alt={device?.name} />
            </IconWrapper>

            <Container>
                {/* 전원 버튼 */}
                {(device?.type === "light" || device?.type === "ac") && (
                    <PowerButton
                        $on={device?.state?.power === "on"}
                        onClick={handleTogglePower}
                    />
                )}

                <DetailWrapper>
                    <Detail $on={false}>타입: {typeLabel}</Detail>
                    <Detail $on={false}>상태: {device?.status}</Detail>
                    {device?.state.power && (
                        <Detail $on={device?.state.power === 'on'}>전원: {device?.state.power}</Detail>
                    )}
                </DetailWrapper>

                <ContentWrapper>
                    <Content>
                        <Title></Title>
                    </Content>
                </ContentWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const IconWrapper = styled.div`
  background: #fff;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 20px;
  position: relative;

  @media (min-width: 768px) {
    padding: 16px 40px;
  }

  @media (min-width: 1400px) {
    width: 1280px;
    padding: 16px 0;
  }
`

const Icon = styled.img`
  width: 200px;
  object-fit: contain;
  margin: 0 auto;


  @media (min-width: 768px) {
    width: 250px;
  }

  @media (min-width: 1400px) {
    width: 320px;
  }

`;

const DetailWrapper = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Detail = styled.span<{ $on: boolean }>`
  padding: 2px 12px;
  border-radius: 12px;
  background: ${({ $on }) => ($on ? "#4caf50" : "#727272")};
  color: #fff;
  font-size: 13px;
`;

const PowerButton = styled.div<{ $on: boolean }>`
  position: absolute;
  top: -50%;
  right: 20px;
  transform: translate(0, 12px);

  background: #fafafa;
  background-color: ${props =>
    props.$on ? "#1AACC6" : "#fafafa"};
  background-image: url(${props =>
    props.$on
      ? '/src/assets/power-btn-on.svg'
      : '/src/assets/power-btn-off.svg'
  });
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
`

const ContentWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  gap:16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap:30px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`