import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  managerName,
  restaurantName,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, managerName, restaurantName, phone })
}
