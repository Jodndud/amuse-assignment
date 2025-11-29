import { useParams  } from 'react-router-dom'
import styled from "styled-components";
import DetailHeader from "@/components/DetailHeader";
import { DEVICE_TYPE_LABEL } from '@/recoil/devicesState'

import {useGetDeviceById} from '@/hooks/useGetDevice'
import { useToggleDevicePower } from "@/hooks/useToggleDevicePower";
import { useUpdateTemperature } from "@/hooks/useUpdateTemperature";


export default function DeviceDetail(){
    const { deviceId } = useParams<{ deviceId: string }>()
    const { device } = useGetDeviceById(deviceId)
    const typeLabel = device ? DEVICE_TYPE_LABEL[device.type] ?? device.type : ''
    const { togglePower } = useToggleDevicePower();
    const { changeTemperature } = useUpdateTemperature();

    const handleTogglePower = () => {
        if (!deviceId) return;
        togglePower(deviceId);
    };

    const handleChangeTemp = (delta: number) => {
        if (!deviceId) return;
        if (device?.type !== "ac") return;
        changeTemperature(deviceId, delta);
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
                    <Detail $on={device?.status === 'online'}>상태: {device?.status}</Detail>
                    {device?.state.power && (
                        <Detail $on={device?.state.power === 'on'}>전원: {device?.state.power}</Detail>
                    )}
                </DetailWrapper>

                <Description>{device?.description || "제품의 설명이 없습니다."}</Description>

                <ContentWrapper>

                    {device?.type === 'ac' && (
                        <Content>
                            <Title>🌡️온도조절</Title>
                            <div className='flex items-center justify-center gap-10'>
                                <Button onClick={() => handleChangeTemp(-1)}>
                                    <img src="/src/assets/minus-icon.svg" alt="minus" />
                                </Button>
                                <div className='text-[40px] font-bold'>{device?.state.temperature}<span className='font-medium text-[28px] ml-1'>℃</span></div>
                                <Button onClick={() => handleChangeTemp(1)}>
                                    <img src="/src/assets/plus-icon.svg" alt="plus" />
                                </Button>
                            </div>
                        </Content>
                    )}
                    
                    {device?.type === 'lock' && (
                        <Content>
                            <Title>🔒잠금여부</Title>
                            {device.state.locked ? (
                                <div className='border-1 border-[#dedede] bg-[#efffeb] rounded-lg p-3 text-center text-md font-bold text-green-400'>현재 기기가 잠금 상태입니다</div>
                            ) : (
                                <div className='border-1 border-[#dedede] bg-[#ffeaea] rounded-lg p-3 text-center text-md font-bold text-red-400'>현재 기기가 잠금해제 상태입니다</div>
                            )}
                        </Content>
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
  top: -26px;
  right: 20px;

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
  gap:20px;

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
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`

const Description = styled.div`
  padding: 60px 0;
  font-size:14px;
  color: #a5a5a5;
  text-align: center;
`

const Button = styled.button`
  background: #fff;
  width: 31px;height: 31px;
  border-radius: 50%;
  box-shadow: 0 1px 2px 0 #00000007;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`