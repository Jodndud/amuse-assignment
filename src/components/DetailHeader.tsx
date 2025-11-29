import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DetailHeader({ children }: {children: React.ReactNode}) {
  const navigate = useNavigate();

  return (
    <Wrapper>
        <HeaderContainer>
            <BackButton onClick={() => navigate(-1)}><Icon src="/src/assets/back-icon.svg" /></BackButton>
            <Title>{children}</Title>
        </HeaderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: between-space;
  align-items: center;
  margin: 0 auto;
  padding: 16px 20px;
  gap: 16px;
  width:100%;

  @media (min-width: 768px) {
    padding: 16px 40px;
  }

  @media (min-width: 1400px) {
    width: 1280px;
    padding: 16px 0;
  }
`;

const BackButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;


const Icon = styled.img`
  object-fit: contain;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 24px;
  }

  @media (min-width: 1400px) {
    width: 28px;
  }

`;

const Title = styled.h1`
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1400px) {
    font-size: 32px;
  }
`;
