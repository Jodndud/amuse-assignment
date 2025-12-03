import { http, HttpResponse } from 'msw'
import type { Device } from "@/types/Device"
import type { Category } from '@/types/Category'
import mockData from "@/data/mockData.json"
import category from "@/data/category.json"
 
let devices: Device[] = mockData.devices as Device[];
let categories: Category[] = category.categories as Category[];

export const handlers = [
  http.get('/api/devices', () => {
    return HttpResponse.json(devices)
  }),

  http.get('/api/devices/:deviceId', ({ params }) => {
    const { deviceId } = params
    const device = devices.find((d) => {
      console.log(d.id)
      return d.id === deviceId
    });

    if (!device) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }

    return HttpResponse.json(device)
  }),

  http.get('/api/categories', () => {
    return HttpResponse.json(categories)
  })

  
//   http.post("/api/devices", async({ request }) => {

//   })
]