interface Product {
  id: number
  title: string
  price: number
  description: string
}

interface Address {
  id: number
  buildingName: string
  line1: string
  line2: string
  line3: string
  town: string
  country: string
  postcode: string
}

export type { Product, Address }
