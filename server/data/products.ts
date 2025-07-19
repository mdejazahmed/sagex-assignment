export interface Product {
    id: number
    name: string
    price: number
    quantity: number
    total_amount: number
    created_at: string
    updated_at: string
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "To Kill a Mockingbird",
      price: 10,
      quantity: 1,
      total_amount: 1960,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]
  