import { Link } from "react-router-dom";

import styled from "styled-components";
import Header from '@/components/Header'
import DeviceCard from "@/components/DeviceCard";

export default function Dashboard() {
  return (
    <Wrapper>
      <Header>AmuseQ Dashboard</Header>
      <Container>
        <Title>내 등록 기기</Title>
        <LinkWrapper>
          {[{id:"d1",name:"거실 조명"}, {id:"d2",name:"안방 에어컨"}, {id:"d3",name:"현관 도어락"}].map((device) => (
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

  @media (min-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    gap:30px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.h2`
  font-weight:600;
`;

const Wrapper = styled.main`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 20px;

  @media (min-width: 920px) {
    width: 768px;
    padding: 16px 0;
  }

  @media (min-width: 1400px) {
    width: 1280px;
    padding: 16px 0;
  }
`;
