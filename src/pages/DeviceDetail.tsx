import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { deviceByIdState } from '../recoil/devicesState'

import styled from "styled-components";
import DetailHeader from "@/components/DetailHeader";


export default function DeviceDetail(){
    const { deviceId } = useParams<{ deviceId: string }>()

    const device = useRecoilValue(
        deviceByIdState(deviceId || ''),
    )

    return(
        <Wrapper>
            <DetailHeader>{device?.name}</DetailHeader>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
