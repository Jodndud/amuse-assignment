export interface Device {
  id: string;
  name: string;
  type: string;
  status: string;
  state: {
    power?: string;
    temperature?: number;
    locked?: boolean;
  };
  imageUrl: string;
  imageUrlOn?: string;
  description: string;
}
