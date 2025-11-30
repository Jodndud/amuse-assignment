import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
  onClickMenu: () => void;
}

export default function Header({ children, onClickMenu }: HeaderProps) {
  return (
    <Wrapper>
      <HeaderContainer>
        <Title>{children}</Title>
        <MenuButton type="button" onClick={onClickMenu}>
          <img src="/images/sidebar-btn.png" alt="메뉴 열기" />
        </MenuButton>
      </HeaderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99;
  top:0;
  background: #f2f2f2;
`;



const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const MenuButton = styled.button`
  width: 24px;
  cursor: pointer;
`;