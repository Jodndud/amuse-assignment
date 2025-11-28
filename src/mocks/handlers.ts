import { http, HttpResponse } from 'msw'
import type { Device } from "@/types/Device";
import mockData from "@/data/mockData.json";
 
let devices: Device[] = mockData.devices as Device[];

export const handlers = [
  http.get('/api/devices', () => {
    return HttpResponse.json(devices)
  }),

  
//   http.post("/api/devices", async({ request }) => {

//   })
]