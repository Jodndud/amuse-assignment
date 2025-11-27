import type { Device } from "@/types/Device";
import styled from "styled-components";

export default function DeviceCard({ device }: { device: Device }){
    return(
        <Card>
            {device.name}
        </Card>
    )
}

const Card = styled.div`
    background: #fff;
    border-radius:12px;
    border:1px solid #dedede;
    padding:16px;
`;