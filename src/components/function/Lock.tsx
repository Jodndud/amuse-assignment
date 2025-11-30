import styled from "styled-components";

interface LockProps {
  locked?: boolean;
}

export default function Lock({ locked }: LockProps) {
  return (
    <Content>
      <Title>🔒잠금여부</Title>

      {locked ? (
        <LockBox $locked={true}>
          현재 기기가 잠금 상태입니다
        </LockBox>
      ) : (
        <LockBox $locked={false}>
          현재 기기가 잠금해제 상태입니다
        </LockBox>
      )}
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const LockBox = styled.div<{ $locked: boolean }>`
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background: ${({ $locked }) => ($locked ? "#efffeb" : "#ffeaea")};
  color: ${({ $locked }) => ($locked ? "#22c55e" : "#f87171")};
`;
