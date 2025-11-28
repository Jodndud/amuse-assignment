import { useParams  } from 'react-router-dom'
import {useGetDeviceById} from '@/hooks/useGetDevice'

import styled from "styled-components";
import DetailHeader from "@/components/DetailHeader";


export default function DeviceDetail(){
    const { deviceId } = useParams<{ deviceId: string }>()

    const { device } = useGetDeviceById(deviceId)

    return(
        <Wrapper>
            <DetailHeader>{device?.name}</DetailHeader>

            <Container>
                <p>{device?.id}</p>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

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
`
