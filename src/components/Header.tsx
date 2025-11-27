import styled from "styled-components";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderContainer>
        <Title>{children}</Title>
      </HeaderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 16px 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 16px 40px;
  }

  @media (min-width: 1400px) {
    width: 1280px;
    padding: 16px 0;
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
