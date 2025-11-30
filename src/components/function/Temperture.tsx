import styled from "styled-components";
import { useUpdateTemperature } from "@/hooks/useUpdateTemperature";

interface TemperatureProps {
  deviceId?: string;
  temperature?: number;
}

export default function Temperature({ deviceId, temperature }: TemperatureProps) {
  const { changeTemperature } = useUpdateTemperature();

  const handleChangeTemp = (delta: number) => {
    if (!deviceId) return;
    changeTemperature(deviceId, delta);
  };

  return (
    <Content>
      <Title>🌡️온도조절</Title>
      <Row>
        <CircleButton onClick={() => handleChangeTemp(-1)}>
          <img src="/images/minus-icon.svg" alt="minus" />
        </CircleButton>

        <TempText>
          {temperature}
          <TempUnit>℃</TempUnit>
        </TempText>

        <CircleButton onClick={() => handleChangeTemp(1)}>
          <img src="/images/plus-icon.svg" alt="plus" />
        </CircleButton>
      </Row>
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

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TempText = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const TempUnit = styled.span`
  font-weight: 500;
  font-size: 28px;
  margin-left: 4px;
`;

const CircleButton = styled.button`
  background: #fff;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  box-shadow: 0 1px 2px 0 #00000007;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
