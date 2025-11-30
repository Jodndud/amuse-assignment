import styled from "styled-components";
import MyDevices from "./MyDevices";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

export default function SideBar({ open, onClose }: SideBarProps) {
  return (
    <>
      <Overlay $open={open} onClick={onClose} />

      <Panel $open={open}>
        <HeaderArea>
          <span>우영님 안녕하세요!</span>
          <CloseButton type="button" onClick={onClose}>
            <img src="/images/close-btn.png" alt="닫기" />
          </CloseButton>
        </HeaderArea>

        <Nav>
          <NavTitle>내 등록 기기</NavTitle>
          <MyDevices />
        </Nav>
      </Panel>
    </>
  );
}

const Overlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
`;

const Panel = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: #ffffff;
  z-index: 100;
  padding: 20px;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: all 0.3s;

  @media (min-width: 768px) {
    width: 400px;
    padding: 20px 40px;
  }

  @media (min-width: 1400px) {
    width: 400px;
    padding: 20px;
  }
`;

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  cursor: pointer;
  img{
    width: 18px;
  }
`;

const Nav = styled.nav`
`;

const NavTitle = styled.nav`
  font-size: 16px;
  margin-bottom: 12px;
`;
