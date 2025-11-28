import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from '@/components/Header'
import DeviceCard from "@/components/DeviceCard";

import { useRecoilValue } from 'recoil'
import { devicesState } from '@/recoil/devicesState'
import { useGetDevices } from '@/hooks/useGetDevice'

export default function Dashboard() {
  useGetDevices()
  const devices = useRecoilValue(devicesState)

  return (
    <Wrapper>
      <Header>AmuseQ Dashboard</Header>
      <Container>
        <Title>내 등록 기기</Title>
        <LinkWrapper>
          {devices.map((device) => (
            <Link key={device.id} to={`/device/${device.id}`}>
              <DeviceCard device={device} />
            </Link>
          ))}
        </LinkWrapper>
      </Container>
    </Wrapper>
  );
}

const LinkWrapper = styled.div`
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
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
  }
`;

const Wrapper = styled.main`
  width: 100%;
`;
 
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 20px;

  @media (min-width: 768px) {
    padding: 16px 40px;
  }

  @media (min-width: 1400px) {
    width: 1280px;
    padding: 16px 0;
  }
`;
