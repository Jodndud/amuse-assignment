import { useParams  } from 'react-router-dom'
import styled from "styled-components";
import DetailHeader from "@/components/DetailHeader";
import { DEVICE_TYPE_LABEL } from '@/recoil/devicesState'
import PowerButton from '@/components/function/PowerButton'
import Temperature from '@/components/function/Temperture';
import Lock from "@/components/function/Lock";

import {useGetDeviceById} from '@/hooks/useGetDevice'

export default function DeviceDetail(){
    const { deviceId } = useParams<{ deviceId: string }>()
    const { device } = useGetDeviceById(deviceId)
    const typeLabel = device ? DEVICE_TYPE_LABEL[device.type] ?? device.type : ''

    const iconSrc =
      device?.state && device?.state.power === "on" &&
      (device?.type === "light" || device?.type === "ac")
        ? device?.imageUrlOn
        : device?.imageUrl;
        
    return(
        <Wrapper>
            <DetailHeader>{device?.name}</DetailHeader>

            <IconWrapper>
                <Icon src={iconSrc} alt={device?.name} role="img" />
            </IconWrapper>

            <Container>
                {(device?.type === "light" || device?.type === "ac") && (
                    <PowerButton
                      deviceId={deviceId}
                      power={device?.state?.power}
                    />
                )}

                <DetailWrapper>
                    <Detail $on={false}>타입: {typeLabel}</Detail>
                    <Detail $on={device?.status === 'online'}>상태: {device?.status}</Detail>
                    {device?.state.power && (
                        <Detail $on={device?.state.power === 'on'}>전원: {device?.state.power}</Detail>
                    )}
                </DetailWrapper>

                <Description>{device?.description || "제품의 설명이 없습니다."}</Description>

                <ContentWrapper>
                    {device?.type === 'ac' && (
                        <Temperature
                          deviceId={deviceId}
                          temperature={device?.state.temperature}
                        />
                    )}
                    
                    {device?.type === 'lock' && (
                        <Lock locked={device.state.locked} />
                    )}
                </ContentWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const IconWrapper = styled.div`
  background: #fff;
  padding-bottom: 20px;
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

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

const Detail = styled.span<{ $on: boolean }>`
  padding: 2px 12px;
  border-radius: 12px;
  background: ${({ $on }) => ($on ? "#4caf50" : "#727272")};
  color: #fff;
  font-size: 13px;
`;

const ContentWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  gap:20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap:30px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const Description = styled.div`
  padding: 60px 0;
  font-size:14px;
  color: #a5a5a5;
  text-align: center;
`