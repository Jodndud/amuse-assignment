import { http, HttpResponse } from 'msw'
import type { Device } from "@/types/Device";
import mockData from "@/data/mockData.json";
 
let devices: Device[] = mockData.devices as Device[];

export const handlers = [
  http.get('/api/devices', () => {
    return HttpResponse.json(devices)
  }),

  http.get('/api/devices/:id', ({ params }) => {
    const { id } = params
    const device = devices.find((d) => d.id === id)

    if (!device) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }

    return HttpResponse.json(device)
}),

  
//   http.post("/api/devices", async({ request }) => {

//   })
]